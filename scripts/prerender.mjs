import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const __dirname  = path.dirname(fileURLToPath(import.meta.url));
const rootDir    = path.resolve(__dirname, "..");
const distPublic = path.join(rootDir, "dist", "public");
const distServer = path.join(rootDir, "dist", "server");
const templatePath = path.join(distPublic, "index.html");

const routes = [
  "/", "/a-propos", "/pourquoi-nous-choisir", "/notre-methode",
  "/materiaux-expertises", "/showroom", "/nos-realisations", "/contact",
];

async function run() {
  console.log("\n🔧 NanoProtects — Démarrage du pré-rendu SSG\n");

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
  let ok = 0, ko = 0;

  for (const route of routes) {
    try {
      const appHtml = render(route);
      const html    = template.replace('<div id="root"></div>', '<div id="root">' + appHtml + '</div>');
      const destDir = route === "/" ? distPublic : path.join(distPublic, route.slice(1));
      fs.mkdirSync(destDir, { recursive: true });
      fs.writeFileSync(path.join(destDir, "index.html"), html, "utf-8");
      console.log("  ✅  " + route.padEnd(38) + " →  " + (route === "/" ? "/index.html" : route + "/index.html"));
      ok++;
    } catch (err) {
      console.warn("  ⚠️   " + route.padEnd(38) + " →  Erreur : " + err.message);
      ko++;
    }
  }

  console.log("\n──────────────────────────────────────────");
  console.log("  " + ok + " page(s) générée(s)   |   " + ko + " erreur(s)");
  if (ok > 0) { console.log("\n🎉 Pré-rendu terminé ! Google indexe maintenant le vrai contenu.\n"); }
  else        { console.error("\n❌ Aucune page générée."); process.exit(1); }
}

run();
