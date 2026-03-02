# CLAUDE.md — NanoProtects Website

Guide de référence pour les assistants IA travaillant sur ce dépôt.

---

## Vue d'ensemble du projet

Site vitrine de **NanoProtects** — entreprise spécialisée dans la protection nanotechnologique des surfaces (zellige, marbre, bois, textile, etc.). Déployé sur **Netlify** comme SPA React statique.

- **Stack** : React 19, TypeScript, Vite 7, Tailwind CSS v4, Wouter (routing), Radix UI, Sonner (toasts)
- **Plateforme** : Netlify (SPA statique + Netlify Forms + Netlify Functions)
- **Langues** : Français, Arabe, Espagnol, Anglais (RTL supporté pour l'arabe)
- **Tests** : Vitest + Testing Library

---

## Structure du dépôt

```
nanoprotects-website/
├── client/                    # Application React (source Vite)
│   ├── index.html             # Point d'entrée HTML
│   ├── public/                # Assets statiques (images, favicon, sw.js…)
│   └── src/
│       ├── App.tsx            # Router principal (wouter)
│       ├── main.tsx           # Bootstrap React
│       ├── index.css          # Styles globaux Tailwind
│       ├── components/        # Composants réutilisables
│       │   ├── Navigation.tsx # Header + menu multilingue
│       │   ├── ImageGallery.tsx
│       │   ├── LazyImage.tsx
│       │   ├── Map.tsx
│       │   └── ui/            # Composants Shadcn/ui (Radix-based)
│       ├── contexts/
│       │   ├── LanguageContext.tsx  # Langue active (fr/ar/es/en)
│       │   └── ThemeContext.tsx
│       ├── hooks/
│       ├── lib/
│       │   ├── translations.ts     # Toutes les traductions (objet unique)
│       │   └── utils.ts
│       ├── pages/             # Une page = une route
│       │   ├── Home.tsx
│       │   ├── APropos.tsx
│       │   ├── PourquoiNousChoisir.tsx
│       │   ├── NotreMethode.tsx
│       │   ├── MateriauxExpertises.tsx
│       │   ├── Showroom.tsx
│       │   ├── Contact.tsx         # Formulaire de contact (voir section dédiée)
│       │   ├── Confirmation.tsx    # Page affichée après soumission réussie
│       │   └── NotFound.tsx
│       └── test/
├── netlify/
│   └── functions/
│       └── contact.js         # Netlify Function — envoi SMTP (Node.js ESM)
├── api/
│   └── contact.ts             # ⚠️ API Vercel (INUTILISÉE sur Netlify — conserver pour référence)
├── public/
│   └── _forms.html            # Formulaire caché pour pré-enregistrement Netlify Forms
├── server/
│   └── index.ts               # Serveur Express (dev local uniquement)
├── shared/
│   └── const.ts
├── netlify.toml               # Config Netlify (build, functions, redirects)
├── vite.config.ts             # Config Vite + plugin debug Manus
├── package.json
├── tsconfig.json
├── CRITICAL_INSTRUCTIONS.md   # ⚠️ Règles sur les textes — lire avant tout changement
└── CLAUDE.md                  # Ce fichier
```

---

## Formulaire de contact — Architecture complète

Le formulaire (`client/src/pages/Contact.tsx`) utilise **deux mécanismes en parallèle** :

### 1. Netlify Forms (capture des données dans le dashboard Netlify)

- Le formulaire HTML a `data-netlify="true"` et `name="contact"`
- À la soumission, un `fetch('/', { method: 'POST', ... })` envoie les données en `application/x-www-form-urlencoded`
- **`public/_forms.html`** : formulaire caché qui permet à Netlify de détecter tous les champs au build
  - ⚠️ Ce fichier DOIT contenir TOUS les champs pour que le dashboard Netlify les affiche correctement
  - Champs déclarés : `name`, `email`, `phone`, `city`, `materials`, `zones`, `protections`, `autreMateriau`, `message`, `bot-field`
- Honeypot anti-spam : champ `bot-field` (masqué via CSS)

### 2. Netlify Function — Envoi email SMTP (`netlify/functions/contact.js`)

- Appelée en fire-and-forget après la soumission Netlify Forms réussie
- URL : `/.netlify/functions/contact`
- Envoie **deux emails** si SMTP configuré :
  1. Email de notification à l'admin (`CONTACT_EMAIL`)
  2. Email de confirmation au client (multilingue : fr/ar/es/en)
- Si SMTP non configuré → log console seulement (pas d'erreur côté utilisateur)
- **Variables d'environnement requises** (à configurer dans Netlify Dashboard > Site Settings > Environment Variables) :
  ```
  SMTP_HOST=smtp.gmail.com
  SMTP_PORT=587
  SMTP_USER=votre-email@gmail.com
  SMTP_PASS=votre-mot-de-passe-application
  CONTACT_EMAIL=contact@nanoprotects.com
  NOREPLY_EMAIL=noreply@nanoprotects.com
  ```

### 3. Integrately Webhook (optionnel — CRM Zoho)

- Déclenché si `VITE_INTEGRATELY_WEBHOOK_URL` est défini dans les env vars
- Variable préfixée `VITE_` car consommée côté navigateur

### Flux de soumission complet

```
Utilisateur soumet le formulaire
  │
  ├─► fetch('/', form-urlencoded)        → Netlify Forms (capture + dashboard)
  │         Si OK ─────────────────────────────────────────────────┐
  │                                                                 ▼
  ├─► fetch('/.netlify/functions/contact', JSON)   → SMTP email (fire-and-forget)
  │
  ├─► fetch(VITE_INTEGRATELY_WEBHOOK_URL, JSON)    → CRM Zoho (optionnel, fire-and-forget)
  │
  └─► redirect vers /confirmation         → Affichage page de succès
```

---

## Internationalisation (i18n)

- Toutes les traductions sont dans `client/src/lib/translations.ts`
- Le contexte langue `LanguageContext` expose `language` (valeurs : `'fr' | 'ar' | 'es' | 'en'`)
- Dans chaque page : `const { language } = useLanguage(); const t = translations[language];`
- **RTL** pour l'arabe : géré via l'attribut `dir` sur le HTML racine
- **⚠️ CRITICAL_INSTRUCTIONS.md** : ne jamais modifier les textes sans autorisation explicite

---

## Conventions de code

### Composants React
- TypeScript strict
- Un fichier = un composant (export default)
- Alias `@/` pointe vers `client/src/`
- Composants UI réutilisables dans `client/src/components/ui/` (Shadcn/ui pattern)

### Styles
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Couleur principale : `#A33215` (terracotta/bordeaux NanoProtects)
- Classe utilitaire `.btn-brand` pour les boutons CTA
- Pas de fichiers CSS séparés par composant — tout dans `index.css` + classes Tailwind inline

### Formulaires
- Validation côté client dans `handleSubmit` / `validateForm`
- Affichage des erreurs inline + bloc récapitulatif en haut du formulaire
- Accessibilité : `aria-invalid`, `aria-describedby`, `role="alert"` sur les erreurs

### Routing
- `wouter` (lightweight React router)
- Routes définies dans `client/src/App.tsx`
- Toutes les routes redirigées vers `index.html` via `netlify.toml`

---

## Commandes de développement

```bash
# Développement local
npm run dev          # Vite dev server sur port 3000

# Build production
npm run build        # Compile vers dist/public/

# Tests
npm run test         # Vitest en mode watch
npm run test:run     # Vitest en mode CI (une seule passe)

# Qualité de code
npm run check        # TypeScript strict check (tsc --noEmit)
npm run format       # Prettier
```

---

## Déploiement Netlify

### Configuration (`netlify.toml`)
```toml
[build]
  command = "npm run build"
  publish = "dist/public"

[functions]
  directory = "netlify/functions"
  node_bundler = "esbuild"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Variables d'environnement à configurer dans Netlify Dashboard

| Variable | Requis | Description |
|---|---|---|
| `SMTP_HOST` | Pour emails SMTP | Hôte SMTP (ex: `smtp.gmail.com`) |
| `SMTP_PORT` | Pour emails SMTP | Port SMTP (587 ou 465) |
| `SMTP_USER` | Pour emails SMTP | Adresse email expéditeur |
| `SMTP_PASS` | Pour emails SMTP | Mot de passe d'application |
| `CONTACT_EMAIL` | Pour emails SMTP | Email destinataire admin |
| `NOREPLY_EMAIL` | Pour emails SMTP | Email expéditeur affiché |
| `VITE_INTEGRATELY_WEBHOOK_URL` | Optionnel | URL webhook CRM Zoho |

### Netlify Forms — Configuration dashboard
1. Aller dans **Netlify Dashboard > Forms**
2. Le formulaire `contact` apparaît après le premier déploiement
3. Configurer les **notifications email** dans l'onglet Form Notifications
4. Les données soumises sont visibles dans l'onglet Submissions

---

## Fichiers critiques — ne pas supprimer

| Fichier | Raison |
|---|---|
| `public/_forms.html` | Pré-enregistrement Netlify Forms — DOIT lister tous les champs |
| `netlify/functions/contact.js` | Envoi SMTP des emails via Netlify Function |
| `client/src/lib/translations.ts` | Toutes les traductions du site |
| `CRITICAL_INSTRUCTIONS.md` | Règles sur les textes approuvés |

---

## Points de vigilance

1. **`api/contact.ts`** utilise `@vercel/node` — c'est une API Vercel NON utilisée sur Netlify. Conserver pour référence mais ne pas l'appeler.

2. **`public/_forms.html`** doit toujours refléter TOUS les champs du formulaire dans `Contact.tsx`. Si un nouveau champ est ajouté au formulaire, l'ajouter aussi dans `_forms.html`.

3. **Variables `VITE_*`** sont publiques (incluses dans le bundle JS). Ne jamais y mettre de secrets.

4. **`vite.config.ts`** contient le plugin Manus Debug Collector (dev only) — ne pas modifier sauf si demandé.

5. **Branch de développement** : `claude/claude-md-mm9htor7kaf79li6-KcSTK`

---

*Dernière mise à jour : 2026-03-02*
