# Pre-Launch Checklist for NanoProtects Website

Based on project review. Use this checklist before going live.

**Recent implementation (Feb 2026):** See [SITE_CORRECTIONS_RECAP.md](SITE_CORRECTIONS_RECAP.md) for the full recap of corrections and improvements (logo hover, hero highlights, page titles, showroom gallery, contact form, backend + email).

---

## ✅ Ready to Deploy (Already Working)

- [x] All 7 pages exist and are functional (Home, À Propos, Pourquoi Choisir NanoProtects, Notre Méthode, Matériaux & Expertises, Showroom, Contact)
- [x] Multi-language support (FR/AR/ES/EN) with RTL for Arabic
- [x] Responsive design and mobile optimization
- [x] SEO meta tags, sitemap, robots.txt
- [x] TypeScript compiles without errors
- [x] Build process works correctly
- [x] Showroom gallery (18 items after Feb 2026 cleanup; 6 items removed per plan)

---

## 🔴 Critical (Must Fix Before Launch)

### 1. ~~Missing Showroom Images~~ ✅ (Addressed Feb 2026)

- [x] Gallery items that referenced `zellige-traditional-before.webp` / `zellige-traditional-after.webp` were **removed** as part of the showroom cleanup (see [SITE_CORRECTIONS_RECAP.md](SITE_CORRECTIONS_RECAP.md)). Remaining gallery items use existing assets.

### 2. ~~Environment Variables (Build Warnings)~~ ✅ (Resolved Feb 11, 2026)

- [x] Analytics script has been **commented out** in `client/index.html` until proper Umami credentials are configured
- [x] Build no longer generates warnings about undefined environment variables
- [x] Clear comment added explaining post-launch configuration

**Status:** RESOLVED. Analytics script safely disabled. See [TEST_RESULTS.md](TEST_RESULTS.md) for verification.

**Post-Launch:** Configure `.env` with `VITE_ANALYTICS_ENDPOINT` and `VITE_ANALYTICS_WEBSITE_ID` when ready.

### 3. ~~Accessibility — Alt Text~~ ✅ (Resolved Feb 11, 2026)

- [x] Home page: Social media logos have descriptive alt text (e.g., "Visit NanoProtects on LinkedIn")
- [x] Navigation (desktop & mobile): All social media icons updated with descriptive alt text
- [x] WCAG 2.1 AA compliant with redundant aria-labels
- [x] 37/37 tests passing including accessibility compliance tests

**Status:** RESOLVED. All changes verified. See [TEST_RESULTS.md](TEST_RESULTS.md).

**Changes:** 9 total updates (3 in Home.tsx, 6 in Navigation.tsx)

### 4. Contact Form Backend ✅ (Implemented Feb 2026)

- [x] Contact form is wired to **POST /api/contact** (see [SITE_CORRECTIONS_RECAP.md](SITE_CORRECTIONS_RECAP.md)).
- [ ] **Production:** Set SMTP env vars so emails are sent: `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`; optional: `SMTP_PORT`, `CONTACT_EMAIL`, `NOREPLY_EMAIL`. Without these, submissions are logged but not emailed.

---

## 🟡 Important (Should Fix)

### 5. ~~Form Accessibility~~ ✅ (Resolved Feb 11, 2026)

- [x] Contact form: All required fields have `aria-required` and `aria-invalid` when validation fails
- [x] autreVille field validation with auto-focus on appearance
- [x] Error summary with `role="alert"` and `aria-live="assertive"` for screen readers
- [x] All form fields have proper ARIA attributes (aria-invalid, aria-describedby, aria-required)
- [x] Clickable error summary links that focus fields
- [x] 14 comprehensive tests covering validation, focus, error summary, and ARIA

**Status:** RESOLVED. All changes verified. See [TEST_RESULTS.md](TEST_RESULTS.md).

**Changes:** Updated Contact.tsx with validation, focus management, error summary, and full ARIA support

### 6. ~~Keyboard & Focus~~ ✅ (Resolved Feb 11, 2026)

- [x] Visible focus indicators for all interactive elements (navigation, gallery, social icons)
- [x] Full keyboard navigation verified (tab order, Enter/Space activation)
- [x] Skip-to-content link for keyboard users
- [x] Global focus-visible styles consistent across site
- [x] Gallery cards keyboard accessible with button elements
- [x] 10 comprehensive tests covering focus indicators, skip link, and keyboard navigation

**Status:** RESOLVED. All changes verified. See [TEST_RESULTS.md](TEST_RESULTS.md).

**Changes:** Updated Navigation.tsx, Showroom.tsx, index.css with focus styles and keyboard support

### 7. ~~Security Audit~~ ✅ (Resolved Feb 11, 2026)

- [x] Critical vulnerabilities patched (axios 1.13.5, pnpm 10.29.3)
- [x] HIGH severity DoS vulnerability resolved (GHSA-43fc-jf86-j433)
- [x] MODERATE path traversal vulnerabilities resolved (GHSA-v253-rj99-jwpq)
- [x] Remaining dev-only vulnerabilities safely deferred (streamdown, vitest)

**Status:** RESOLVED. All production vulnerabilities addressed. See [TEST_RESULTS.md](TEST_RESULTS.md).

### 8. ~~Image Optimization~~ ✅ (Resolved Feb 11, 2026)

- [x] `loading="lazy"` and `decoding="async"` added to social media icons (6 instances)
- [x] All JPG files converted to WebP (2 files: plage-piscine, sol-pierre)
- [x] Large WebP files optimized with Sharp (31 files, ~15% average reduction)
- [x] Image conversion script created (scripts/convert-images.js)
- [x] All showroom image references updated to WebP format

**Status:** RESOLVED. All images optimized and verified. See [TEST_RESULTS.md](TEST_RESULTS.md).

**Changes:**
- Created scripts/convert-images.js for automated optimization
- Updated Navigation.tsx, Home.tsx, Showroom.tsx with lazy loading
- Converted and optimized all project images

---

## 🟢 Optional (Nice to Have)

### 9. ~~PWA~~ ✅ (Implemented Feb 11, 2026)

- [x] Service worker already exists and works (`public/sw.js`)
- [x] `manifest.json` created with proper PWA structure
- [x] Manifest link added to HTML
- [x] Theme colors, icons, and localization configured
- [ ] **Post-Launch:** Generate proper 192×192 and 512×512 PNG icons (currently using favicon)

**Status:** READY. PWA compliant. See [TEST_RESULTS.md](TEST_RESULTS.md) for manifest validation.

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

## 🚀 Launch Preparation Status (Feb 11, 2026)

**All 7 pre-launch issues have been RESOLVED:**

### Critical Issues (4)
1. ✅ ~~Missing showroom images~~ — Removed affected gallery items
2. ✅ ~~Analytics script warnings~~ — Safely commented out
3. ✅ ~~Accessibility alt text~~ — 9 updates, WCAG 2.1 AA compliant
4. ✅ ~~Security vulnerabilities~~ — Critical patches applied (axios, pnpm)

### Important Issues (3)
5. ✅ ~~Form Accessibility~~ — Validation, focus management, error summary, full ARIA support
6. ✅ ~~Keyboard & Focus~~ — Focus indicators, skip link, keyboard navigation, gallery accessibility
8. ✅ ~~Image Optimization~~ — Lazy loading, JPG to WebP conversion, optimization script

**Bonus completions:**
- ✅ PWA manifest created and validated
- ✅ Comprehensive test suite (65/65 tests passing)
- ✅ Clean production build
- ✅ Automated image optimization workflow

See [TEST_RESULTS.md](TEST_RESULTS.md) for complete verification.

### Remaining Pre-Launch Steps

1. **Set SMTP env vars** in production for contact form emails (Critical §4)
2. Run basic cross-device testing (§11)
3. Deploy! 🎉

### Post-Launch Enhancements

- Configure Umami analytics with proper credentials
- Generate proper PWA icons (192×192, 512×512)
- Update dev dependencies (streamdown, vitest) in separate branch
- Add responsive images with srcset for major assets
- Iterate on performance and optional items
