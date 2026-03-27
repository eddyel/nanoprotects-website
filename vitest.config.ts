import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin, type ViteDevServer } from "vite";

const PROJECT_ROOT = import.meta.dirname;
const LOG_DIR = path.join(PROJECT_ROOT, ".manus-logs");
const MAX_LOG_SIZE_BYTES = 1 * 1024 * 1024;
const TRIM_TARGET_BYTES = Math.floor(MAX_LOG_SIZE_BYTES * 0.6);
type LogSource = "browserConsole" | "networkRequests" | "sessionReplay";

function ensureLogDir() {
  if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });
}
function trimLogFile(logPath: string, maxSize: number) {
  try {
    if (!fs.existsSync(logPath) || fs.statSync(logPath).size <= maxSize) return;
    const lines = fs.readFileSync(logPath, "utf-8").split("\n");
    const keptLines: string[] = [];
    let keptBytes = 0;
    for (let i = lines.length - 1; i >= 0; i--) {
      const lb = Buffer.byteLength(`${lines[i]}\n`, "utf-8");
      if (keptBytes + lb > TRIM_TARGET_BYTES) break;
      keptLines.unshift(lines[i]); keptBytes += lb;
    }
    fs.writeFileSync(logPath, keptLines.join("\n"), "utf-8");
  } catch { /* ignore */ }
}
function writeToLogFile(source: LogSource, entries: unknown[]) {
  if (!entries.length) return;
  ensureLogDir();
  const logPath = path.join(LOG_DIR, `${source}.log`);
  const lines = entries.map((e) => `[${new Date().toISOString()}] ${JSON.stringify(e)}`);
  fs.appendFileSync(logPath, `${lines.join("\n")}\n`, "utf-8");
  trimLogFile(logPath, MAX_LOG_SIZE_BYTES);
}
function vitePluginManusDebugCollector(): Plugin {
  return {
    name: "manus-debug-collector",
    transformIndexHtml(html) {
      if (process.env.NODE_ENV === "production") return html;
      return {
        html,
        tags: [{ tag: "script", attrs: { src: "/__manus__/debug-collector.js", defer: true }, injectTo: "head" as const }],
      };
    },
    configureServer(server: ViteDevServer) {
      server.middlewares.use("/__manus__/logs", (req, res, next) => {
        if (req.method !== "POST") return next();
        const handle = (p: any) => {
          if (p.consoleLogs?.length)     writeToLogFile("browserConsole",  p.consoleLogs);
          if (p.networkRequests?.length) writeToLogFile("networkRequests", p.networkRequests);
          if (p.sessionEvents?.length)   writeToLogFile("sessionReplay",   p.sessionEvents);
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ success: true }));
        };
        const body = (req as any).body;
        if (body && typeof body === "object") {
          try { handle(body); } catch (e) { res.writeHead(400).end(JSON.stringify({ success: false, error: String(e) })); }
          return;
        }
        let raw = "";
        req.on("data", (c) => { raw += c.toString(); });
        req.on("end", () => {
          try { handle(JSON.parse(raw)); } catch (e) { res.writeHead(400).end(JSON.stringify({ success: false, error: String(e) })); }
        });
      });
    },
  };
}

// =============================================================================
// Détection du mode SSR
// Activé uniquement par : npm run build:ssr
// N'affecte pas le site ni la charte graphique
// =============================================================================
const isSsr = process.env.BUILD_MODE === "ssr";

const framerStub = path.resolve(import.meta.dirname, "client/src/ssr-stubs/framer-motion.js");
const sonnerStub = path.resolve(import.meta.dirname, "client/src/ssr-stubs/sonner.js");

const plugins = isSsr
  ? [react()]
  : [react(), tailwindcss(), vitePluginManusDebugCollector()];

export default defineConfig({
  plugins,

  resolve: {
    alias: {
      // En SSR : stubs statiques pour les libs incompatibles SSR
      // En client normal : vraies libs (comportement inchangé)
      ...(isSsr ? {
        "framer-motion": framerStub,
        "sonner":        sonnerStub,
      } : {}),
      "@":       path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },

  envDir: path.resolve(import.meta.dirname),
  root:   path.resolve(import.meta.dirname, "client"),

  build: isSsr
    ? {
        // ── Build SSR : React externalisé pour permettre le patch ──
        ssr: true,
        rollupOptions: {
          input: path.resolve(import.meta.dirname, "client/src/entry-server.tsx"),
          external: [
            "react",
            "react-dom",
            "react-dom/server",
            "react/jsx-runtime",
            "react/jsx-dev-runtime",
          ],
          output: {
            format:          "esm" as const,
            entryFileNames:  "entry-server.js",
          },
        },
        outDir:       path.resolve(import.meta.dirname, "dist/server"),
        emptyOutDir:  true,
        target:       "node18",
        minify:       false,
        cssCodeSplit: false,
      }
    : {
        // ── Build client normal — identique à l'original ──
        outDir:      path.resolve(import.meta.dirname, "dist/public"),
        emptyOutDir: true,
        target:      "es2020",
        minify:      "esbuild",
        cssMinify:   "lightningcss",
        rollupOptions: {
          output: {
            manualChunks: {
              "react-vendor": ["react", "react-dom"],
              "ui-vendor":    ["lucide-react", "@radix-ui/react-slot"],
              routing:        ["wouter"],
            },
          },
        },
        chunkSizeWarningLimit: 500,
      },

  server: {
    port:       3000,
    strictPort: false,
    host:       true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: { strict: true, deny: ["**/.*"] },
  },
});