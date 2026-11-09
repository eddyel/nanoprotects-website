import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const __dirname  = path.dirname(fileURLToPath(import.meta.url));
const rootDir    = path.resolve(__dirname, "..");
const distPublic = path.join(rootDir, "dist", "public");
const distServer = path.join(rootDir, "dist", "server");
const templatePath = path.join(distPublic, "index.html");

const SITE = "https://nanoprotects.com";

const routes = [
  "/", "/a-propos", "/pourquoi-nous-choisir", "/notre-methode",
  "/materiaux-expertises", "/showroom", "/nos-realisations", "/contact",
];

// Titre et description par page (francais, langue du HTML pre-rendu).
// L'accueil ("/") garde ceux du template index.html.
// Ces textes doivent rester identiques a ceux de client/src/App.tsx.
const pageSeo = {
  "/materiaux-expertises": {
    title: "Nettoyage Bejmat, Zellige, Pierre Taza, Marbre | NanoProtects",
    description: "Nettoyage et protection nano du bejmat, zellige, carreaux beldi, pierre de Taza et marbre. Solutions durables pour hôtels et riads à Marrakech.",
  },
  "/showroom": {
    title: "Réalisations Avant/Après Bejmat et Zellige | NanoProtects",
    description: "Galerie avant/après de nos interventions en riads et hôtels à Marrakech : bejmat, zellige, pierre de Taza, marbre. Résultats visibles, protection durable.",
  },
  "/nos-realisations": {
    title: "Réalisations Avant/Après Bejmat et Zellige | NanoProtects",
    description: "Galerie avant/après de nos interventions en riads et hôtels à Marrakech : bejmat, zellige, pierre de Taza, marbre. Résultats visibles, protection durable.",
  },
  "/notre-methode": {
    title: "Notre Méthode : Nettoyage puis Protection Nano | NanoProtects",
    description: "Diagnostic, nettoyage régénérant puis protection nanotechnologique invisible pour 3 à 5 ans. Découvrez notre méthode en trois étapes.",
  },
  "/pourquoi-nous-choisir": {
    title: "Pourquoi Choisir NanoProtects | Protection Nano Durable",
    description: "Expertise scientifique, protection invisible de 3 à 5 ans, intervention discrète et partenariat de confiance : pourquoi hôtels et riads nous choisissent.",
  },
  "/a-propos": {
    title: "À Propos de NanoProtects | Nano-Protection à Marrakech",
    description: "Fondée en 2019 à Marrakech, NanoProtects accompagne plus de 50 établissements partenaires et de nombreux particuliers au Maroc.",
  },
  "/contact": {
    title: "Diagnostic Gratuit Nano-Protection | Contact NanoProtects",
    description: "Demandez votre diagnostic gratuit et sans engagement pour vos surfaces : bejmat, zellige, marbre, pierre de Taza. Réponse sous 24 heures ouvrées.",
  },
};

// ---------- Outils pour ecrire l'en-tete HTML de chaque page ----------

const escRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const escAttr  = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escText  = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const canonicalFor = (route) => (route === "/" ? SITE + "/" : SITE + route + "/");

function metaTagRegex(key) {
  return new RegExp('<meta\\s+[^>]*(?:name|property)=["\']' + escRegex(key) + '["\'][^>]*>', "i");
}

function setMeta(html, kind, key, value) {
  const re = metaTagRegex(key);
  const v  = escAttr(value);
  if (re.test(html)) {
    return html.replace(re, (tag) =>
      /\bcontent=(["']).*?\1/is.test(tag)
        ? tag.replace(/\bcontent=(["']).*?\1/is, () => 'content="' + v + '"')
        : tag.replace(/\s*\/?>$/, () => ' content="' + v + '" />')
    );
  }
  return html.replace("</head>", () => '  <meta ' + kind + '="' + key + '" content="' + v + '" />\n</head>');
}

function setCanonical(html, url) {
  const re = /<link\s+[^>]*rel=["']canonical["'][^>]*>/i;
  const v  = escAttr(url);
  if (re.test(html)) {
    return html.replace(re, (tag) =>
      /\bhref=(["']).*?\1/is.test(tag)
        ? tag.replace(/\bhref=(["']).*?\1/is, () => 'href="' + v + '"')
        : tag.replace(/\s*\/?>$/, () => ' href="' + v + '" />')
    );
  }
  return html.replace("</head>", () => '  <link rel="canonical" href="' + v + '" />\n</head>');
}

function setTitle(html, title) {
  const re = /<title[^>]*>[\s\S]*?<\/title>/i;
  const t  = escText(title);
  if (re.test(html)) return html.replace(re, () => "<title>" + t + "</title>");
  return html.replace("</head>", () => "  <title>" + t + "</title>\n</head>");
}

function readCanonical(html) {
  const tag = html.match(/<link\s+[^>]*rel=["']canonical["'][^>]*>/i);
  if (!tag) return null;
  const m = tag[0].match(/\bhref=(["'])(.*?)\1/is);
  return m ? m[2] : null;
}

function readMeta(html, key) {
  const tag = html.match(metaTagRegex(key));
  if (!tag) return null;
  const m = tag[0].match(/\bcontent=(["'])(.*?)\1/is);
  return m ? m[2] : null;
}

function applyPageHead(html, route) {
  const url = canonicalFor(route);
  html = setCanonical(html, url);
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "name", "twitter:url", url);

  const seo = pageSeo[route];
  if (seo) {
    html = setTitle(html, seo.title);
    html = setMeta(html, "name", "description", seo.description);
    html = setMeta(html, "property", "og:title", seo.title);
    html = setMeta(html, "property", "og:description", seo.description);
    html = setMeta(html, "name", "twitter:title", seo.title);
    html = setMeta(html, "name", "twitter:description", seo.description);
  }
  return html;
}

// Verification : retourne la liste des problemes (vide = tout est correct)
function checkPageHead(html, route) {
  const problems = [];
  const expected = canonicalFor(route);
  const count = (re) => (html.match(re) || []).length;

  if (count(/<link\s+[^>]*rel=["']canonical["']/gi) !== 1) problems.push("le nombre de balises canonical est different de 1");
  if (readCanonical(html) !== expected) problems.push("canonical attendu " + expected + " mais trouve " + readCanonical(html));
  if (count(/<title[\s>]/gi) !== 1) problems.push("le nombre de balises title est different de 1");
  if (readMeta(html, "og:url") !== expected) problems.push("og:url incorrect");

  const seo = pageSeo[route];
  if (seo) {
    const t = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    if (!t || t[1] !== escText(seo.title)) problems.push("title incorrect");
    if (readMeta(html, "description") !== escAttr(seo.description)) problems.push("meta description incorrecte");
  }
  return problems;
}

// ---------- Pre-rendu ----------

async function run() {
  console.log("\n🔧 NanoProtects - Démarrage du pré-rendu SSG\n");

  if (!fs.existsSync(templatePath)) { console.error("❌ dist/public/index.html introuvable."); process.exit(1); }
  if (!fs.existsSync(distServer))   { console.error("❌ dist/server/ introuvable.");           process.exit(1); }

  const serverFiles = fs.readdirSync(distServer);
  const entryFile   = serverFiles.find(f => f.includes("entry-server") && f.endsWith(".js"));
  if (!entryFile) { console.error("❌ entry-server.js introuvable dans dist/server/", serverFiles); process.exit(1); }

  // Patch useSyncExternalStore
  const req   = createRequire(import.meta.url);
  const React = req("react");
  if (typeof React.useSyncExternalStore === "function") {
    const _orig = React.useSyncExternalStore;
    React.useSyncExternalStore = (sub, get, getSrv) => _orig(sub, get, getSrv !== undefined ? getSrv : get);
    console.log("🩹 useSyncExternalStore patché\n");
  }

  // Polyfills navigateur complets
  const makeEl = () => ({
    setAttribute: () => {}, getAttribute: () => null, removeAttribute: () => {},
    appendChild: () => {}, removeChild: () => {}, insertBefore: () => {},
    addEventListener: () => {}, removeEventListener: () => {},
    style: {}, classList: { add: () => {}, remove: () => {}, contains: () => false, toggle: () => {} },
    children: [], childNodes: [], firstChild: null, lastChild: null,
    parentNode: null, tagName: "", nodeType: 1, nodeName: "", nodeValue: null,
    textContent: "", innerHTML: "", outerHTML: "",
    getBoundingClientRect: () => ({ top: 0, left: 0, right: 0, bottom: 0, width: 0, height: 0 }),
    offsetWidth: 0, offsetHeight: 0, scrollWidth: 0, scrollHeight: 0,
    focus: () => {}, blur: () => {}, click: () => {}, remove: () => {},
    querySelectorAll: () => [], querySelector: () => null,
    hasAttribute: () => false, contains: () => false,
  });

  if (!global.localStorage) {
    global.localStorage = { getItem: () => null, setItem: () => {}, removeItem: () => {}, clear: () => {}, length: 0 };
  }
  if (!global.sessionStorage) {
    global.sessionStorage = { getItem: () => null, setItem: () => {}, removeItem: () => {}, clear: () => {}, length: 0 };
  }

  const fakeDoc = {
    documentElement: { ...makeEl(), dir: "ltr", lang: "fr" },
    head:   { ...makeEl(), appendChild: () => {}, removeChild: () => {} },
    body:   { ...makeEl() },
    createElement:          (tag) => ({ ...makeEl(), tagName: String(tag).toUpperCase() }),
    createElementNS:        (ns, tag) => ({ ...makeEl(), tagName: String(tag).toUpperCase() }),
    createTextNode:         (text) => ({ nodeType: 3, nodeValue: text, textContent: text }),
    createDocumentFragment: () => ({ ...makeEl(), nodeType: 11 }),
    createComment:          (data) => ({ nodeType: 8, nodeValue: data }),
    querySelector:          () => null,
    querySelectorAll:       () => [],
    getElementById:         () => null,
    getElementsByTagName:   () => [],
    getElementsByClassName: () => [],
    getElementsByName:      () => [],
    addEventListener:       () => {},
    removeEventListener:    () => {},
    dispatchEvent:          () => true,
    hasFocus:               () => false,
    title:                  "NanoProtects",
    readyState:             "complete",
    compatMode:             "CSS1Compat",
    characterSet:           "UTF-8",
    contentType:            "text/html",
    location:               { href: "/", pathname: "/", search: "", hash: "" },
  };
  global.document = fakeDoc;

  if (!global.window) {
    global.window = {
      document: fakeDoc,
      addEventListener: () => {}, removeEventListener: () => {}, dispatchEvent: () => {},
      matchMedia: () => ({ matches: false, addListener: () => {}, removeEventListener: () => {}, addEventListener: () => {} }),
      location:   { href: "/", pathname: "/", search: "", hash: "" },
      history:    { pushState: () => {}, replaceState: () => {}, back: () => {} },
      getComputedStyle: () => ({ getPropertyValue: () => "", setProperty: () => {} }),
      scrollTo: () => {}, scrollBy: () => {},
      innerWidth: 1280, innerHeight: 800, outerWidth: 1280, outerHeight: 800,
      devicePixelRatio: 1,
      requestAnimationFrame: (cb) => setTimeout(cb, 16),
      cancelAnimationFrame:  (id) => clearTimeout(id),
      setTimeout, clearTimeout, setInterval, clearInterval,
      console, process,
    };
    global.window.window = global.window;
  }
  if (!global.navigator) {
    global.navigator = { userAgent: "node", language: "fr", languages: ["fr"], onLine: true };
  }
  if (typeof global.CSS === "undefined") {
    global.CSS = { escape: (s) => s, supports: () => false };
  }

  const entryPath = path.join(distServer, entryFile);
  console.log("📦 Module SSR chargé :", entryFile, "\n");

  let render;
  try {
    const mod = await import(entryPath);
    render = mod.render;
  } catch (err) {
    console.error("❌ Impossible de charger le module SSR :", err.message);
    console.error(err.stack);
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, "utf-8");
  let ok = 0, ko = 0, seoKo = 0;

  for (const route of routes) {
    try {
      const appHtml = render(route);
      let html      = template.replace('<div id="root"></div>', '<div id="root">' + appHtml + '</div>');

      // En-tete SEO propre a chaque page (canonical, titre, description)
      html = applyPageHead(html, route);
      const problems = checkPageHead(html, route);

      const destDir = route === "/" ? distPublic : path.join(distPublic, route.slice(1));
      fs.mkdirSync(destDir, { recursive: true });
      fs.writeFileSync(path.join(destDir, "index.html"), html, "utf-8");

      if (problems.length === 0) {
        console.log("  ✅  " + route.padEnd(38) + " →  " + (route === "/" ? "/index.html" : route + "/index.html") + "  |  SEO OK : " + canonicalFor(route));
      } else {
        console.warn("  ❌  " + route.padEnd(38) + " →  En-tête SEO incorrect :");
        problems.forEach((p) => console.warn("        - " + p));
        seoKo++;
      }
      ok++;
    } catch (err) {
      console.warn("  ⚠️   " + route.padEnd(38) + " →  Erreur : " + err.message);
      ko++;
    }
  }

  console.log("\n──────────────────────────────────────────");
  console.log("  " + ok + " page(s) générée(s)   |   " + ko + " erreur(s)   |   " + seoKo + " en-tête(s) SEO incorrect(s)");

  if (seoKo > 0) {
    console.error("\n❌ En-tête SEO incorrect sur " + seoKo + " page(s). Déploiement arrêté par sécurité : la version actuelle du site reste en ligne.\n");
    process.exit(1);
  }
  if (ok > 0) { console.log("\n🎉 Pré-rendu terminé ! Google indexe maintenant le vrai contenu, avec un canonical propre à chaque page.\n"); }
  else        { console.error("\n❌ Aucune page générée."); process.exit(1); }
}

run();
