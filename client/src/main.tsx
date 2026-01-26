import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Register service worker for PWA support (production only)
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('[App] ServiceWorker registered:', registration.scope);

        // Check for updates periodically
        setInterval(() => {
          registration.update();
        }, 60 * 60 * 1000); // Check every hour
      })
      .catch((error) => {
        console.error('[App] ServiceWorker registration failed:', error);
      });
  });
}

createRoot(document.getElementById("root")!).render(<App />);
