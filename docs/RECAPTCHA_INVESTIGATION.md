# Investigation: reCAPTCHA commit (`13f3b50`) problems

> Author: Manus / dev-agent  
> Date: Analysis run on 2026-02-05  
> Context: `git show 13f3b50` and present codebase audit

---

## What changed in `13f3b50`

- Added reCAPTCHA v3 script to `client/index.html`
- Added client-side token generation logic in `client/src/pages/Contact.tsx`

```diff
client/index.html                 | +3 lines
client/src/pages/Contact.tsx      | +39 lines
```

The commit message states: "…uses Google's test keys for development/testing. Automatic token refresh on each submission attempt."

---

## Problems introduced

### 1. **CSP blocks reCAPTCHA**

Content-Security-Policy in `index.html` only allows

```
https://fonts.googleapis.com https://cdn.jsdelivr.net
```

reCAPTCHA v3 is loaded from `https://www.google.com/recaptcha/api.js`, and its iframe/JS resources are served from `https://www.gstatic.com/*` and `https://www.google.com/*`. Neither domain is whitelisted.

**Result:** Browser blocks the script. `window.grecaptcha` stays `undefined` and every form submission shows “Security verification failed. Please refresh and try again.”

### 2. **Race condition on load**

Script is loaded with `async defer`:

```html
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
```

Component's `useEffect` executes immediately on mount but reCAPTCHA may not be ready.

If `grecaptcha` is `undefined`, no token is ever set → perpetual failure even when CSP is fixed.

### 3. **Hard-coded Google test site key**

```ts
(window as any).grecaptcha.execute('6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', { action: 'submit' })
```

`'6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'` is Google's **public test key**—it always passes, should never be used in production, and provides no spam protection.

### 4. **No server-side verification**

Token is obtained but form is only simulated on client (`setTimeout`). ReCAPTCHA v3 is secure only when the token is verified server-side.

### 5. **Poor user experience**

Generic error message “Security verification failed. Please refresh and try again.” with no way to retry, plus no visible badge/notice for users with script-blockers.

---

## Subsequent rollback

Commit `03590cb` (title "Rollback to a430a567", 2026-02-04) reverted the entire reCAPTCHA integration.

Therefore the current `main` branch is clean of these issues.

---

## Commit preceding the reCAPTCHA work

- **Parent SHA**: `a430a56`  
- **Message**: *"Checkpoint: Restored hero background image using CDN URL. Added '(sélection multiple)' text after protection type label. Added 2 new material options (Céramique, Carreaux Ciment Beldi) to Nature des Matériaux. Updated Contact page subtitle with new comprehensive text across all 4 languages. Added comparison section to 'Pourquoi Nous Choisir?' page showing Protection Filmogène vs Imprégnation NanoProtects. All modifications fully multilingual (FR/AR/ES/EN)."*

If you need to reset the repo to **exactly** before reCAPTCHA, checkout or revert to `a430a56`.

---

## Recommendations for a future, safe reCAPTCHA implementation

1. **Adjust CSP** (add to HTML header):

   ```html
   <meta http-equiv="Content-Security-Policy"
         content="...
         script-src 'self' 'unsafe-inline' 'unsafe-eval'
                  https://fonts.googleapis.com
                  https://cdn.jsdelivr.net
                  https://www.google.com/recaptcha/api.js
                  https://www.gstatic.com/recaptcha/
                  https://www.google.com/recaptcha/;
         frame-src https://www.google.com/recaptcha/
                  https://www.recaptcha.net/recaptcha/;
         ...">
   ```

   (Production CSP may also include `connect-src https://www.google.com/recaptcha/` if backend verification is on Google servers.)

2. **Wait for script ready** (example):

   ```ts
   useEffect(() => {
     const check = () => {
       if (window.grecaptcha) {
         window.grecaptcha.execute(siteKey, { action: 'submit' })
            .then(setRecaptchaToken)
            .catch(console.error);
         return; // ready
       }
       setTimeout(check, 100); // else poll
     };
     check();
   }, []);
   ```

   or use reCAPTCHA’s `onload` callback (`?onload=ready&render=explicit`).

3. **Use environment key**:

   ```ts
   const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY; // real key in .env
   ```

4. **Send token server-side and verify**:

   ```ts
   // Contact.tsx
   const token = await getRecaptchaToken();
   const payload = { token, ...formData };
   const res = await fetch('/api/contact', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(payload)
   });

   // Server
   const data = await axios.post(
     'https://www.google.com/recaptcha/api/siteverify',
     `secret=${RECAPTCHA_SECRET}&response=${token}`,
     { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
   );
   data.data.success === true // continue
   ```

5. **Better error UX**:

   - Add visual notice / badge reCAPTCHA requires.
   - Show specific error steps (“security verification unavailable. Please wait.”).

---

## Summary

- `13f3b50` failed due to CSP whitelisting, race condition on async script load, hard-coded test key, and lack of server verification.
- The codebase was rolled back; current `main` is free of those issues (you can find reCAPTCHA code only in reverted history).
- Next time, update CSP, wait for reCAPTCHA to be ready, use production keys, and always verify tokens server-side before accepting form data.