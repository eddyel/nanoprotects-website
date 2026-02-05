# Pre-Launch Checklist for NanoProtects Website

Based on project review. Use this checklist before going live.

---

## ✅ Ready to Deploy (Already Working)

- [x] All 7 pages exist and are functional (Home, À Propos, Pourquoi Nous Choisir, Notre Méthode, Matériaux & Expertises, Showroom, Contact)
- [x] Multi-language support (FR/AR/ES/EN) with RTL for Arabic
- [x] Responsive design and mobile optimization
- [x] SEO meta tags, sitemap, robots.txt
- [x] TypeScript compiles without errors
- [x] Build process works correctly
- [x] 29 showroom images present and ready

---

## 🔴 Critical (Must Fix Before Launch)

### 1. Missing Showroom Images

The Showroom gallery references images that may not exist:

- [ ] Add or verify: `zellige-traditional-before.webp`
- [ ] Add or verify: `zellige-traditional-after.webp`

**Action:** Either add these images under `client/public/images/showroom/` or remove the gallery items that reference them.

### 2. Environment Variables (Build Warnings)

- [ ] Resolve missing analytics configuration:
  - `VITE_ANALYTICS_ENDPOINT`
  - `VITE_ANALYTICS_WEBSITE_ID`

**Action:** Either configure Umami analytics (e.g. in `.env`) or remove the analytics script tag from `client/index.html` (lines ~121–125).

### 3. Accessibility — Missing Alt Text

- [ ] Home page: ensure social media logos have descriptive alt text (e.g. “LinkedIn – NanoProtects”, not just “LinkedIn”)
- [ ] Showroom gallery: add descriptive `alt` attributes for all gallery images

**Action:** Add descriptive alt text for screen readers across images.

### 4. Contact Form Backend

- [ ] Confirm contact form submission is wired to email or CRM

**Action:** Set up email delivery (e.g. Nodemailer, SendGrid) or document how submissions are handled (e.g. third-party form service).

---

## 🟡 Important (Should Fix)

### 5. Form Accessibility

- [ ] Add `aria-required` to required form fields
- [ ] Add `aria-invalid` when validation fails
- [ ] Ensure error messages are announced to screen readers (e.g. `aria-live` or `role="alert"`)

### 6. Keyboard & Focus

- [ ] Add visible focus indicators for all interactive elements
- [ ] Verify full keyboard navigation (tab order, focus management)

### 7. Security Audit

- [ ] Run `npm audit` and address findings
- [ ] Run `npm audit fix` (or fix manually if breaking changes)

### 8. Image Optimization

- [ ] Add `loading="lazy"` to below-the-fold images
- [ ] Consider responsive images with `srcset` for key assets
- [ ] Confirm WebP (and fallbacks where needed) for major images

---

## 🟢 Optional (Nice to Have)

### 9. PWA

- [ ] Register service worker (e.g. in `main.tsx` or entry) if using `sw.js`
- [ ] Add `manifest.json` and app icons for “Add to Home Screen”

### 10. Performance

- [ ] Review main JS bundle size (e.g. further code-splitting if needed)
- [ ] Lazy-load non-critical components where useful

### 11. Testing

- [ ] Cross-browser: Safari, Firefox, Chrome, Edge
- [ ] Mobile: iOS Safari, Android Chrome
- [ ] Contact form submission end-to-end
- [ ] RTL layout for Arabic
- [ ] All internal links and CTAs

### 12. Production Setup

- [ ] Production domain and DNS (e.g. nanoprotects.manus.space)
- [ ] SSL certificate
- [ ] CDN for static assets (if applicable)
- [ ] Error monitoring (e.g. Sentry)

---

## 📋 Launch Day Checklist

- [ ] All pages load correctly
- [ ] Contact form submits and is received
- [ ] All navigation links work
- [ ] Language switcher works (FR/AR/ES/EN)
- [ ] Test on at least one real mobile device
- [ ] Social media links open correctly
- [ ] Showroom gallery and filters work
- [ ] Map / location (if any) works
- [ ] All CTAs (buttons, links) work
- [ ] Run Lighthouse (aim for 90+ where feasible)

---

## Time Estimates

| Scope                    | Estimate   |
|--------------------------|------------|
| Critical fixes           | 2–4 hours  |
| Important fixes          | 4–6 hours  |
| Optional enhancements    | 8–12 hours |
| Testing                  | 2–3 hours  |

**Minimum viable launch:** ~6–7 hours (critical + basic testing)  
**Production-ready launch:** ~15–20 hours (critical + important + testing)

---

## Recommendation

The site is roughly 90% ready. For a fast launch:

1. Fix missing showroom images (or remove those items).
2. Remove or configure the analytics script.
3. Add proper alt text to images.
4. Set up contact form email delivery.
5. Run basic cross-device testing.
6. Deploy.

Then iterate on accessibility, performance, and optional items after launch.
