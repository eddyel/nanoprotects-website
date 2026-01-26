/**
 * Service Worker for NanoProtects Website
 *
 * Features:
 * - Image caching for offline support
 * - Cache-first strategy for static assets
 * - Network-first for API calls
 * - Automatic cache versioning
 */

const CACHE_VERSION = 'v1';
const IMAGE_CACHE = `nanoprotects-images-${CACHE_VERSION}`;
const STATIC_CACHE = `nanoprotects-static-${CACHE_VERSION}`;

// Assets to precache on install
const PRECACHE_ASSETS = [
  '/',
  '/images/PHOTO-2026-01-25-15-41-21.jpg', // Logo
  '/images/hero-riad.jpg',
  '/images/hotel-lobby.jpg',
  '/images/marble-macro.jpg',
];

// Install event - precache critical assets
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Install');

  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[ServiceWorker] Precaching static assets');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting()) // Activate immediately
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activate');

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              // Delete old versions
              return cacheName.startsWith('nanoprotects-') &&
                     !cacheName.includes(CACHE_VERSION);
            })
            .map((cacheName) => {
              console.log('[ServiceWorker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => self.clients.claim()) // Take control immediately
  );
});

// Fetch event - cache strategy
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests
  if (url.origin !== location.origin) {
    return;
  }

  // Image caching strategy (cache-first)
  if (request.destination === 'image') {
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            console.log('[ServiceWorker] Serving cached image:', url.pathname);
            return cachedResponse;
          }

          // Not in cache, fetch from network
          return fetch(request)
            .then((networkResponse) => {
              // Clone response before caching
              const responseToCache = networkResponse.clone();

              caches.open(IMAGE_CACHE)
                .then((cache) => {
                  console.log('[ServiceWorker] Caching new image:', url.pathname);
                  cache.put(request, responseToCache);
                });

              return networkResponse;
            })
            .catch((error) => {
              console.error('[ServiceWorker] Fetch failed for image:', url.pathname, error);
              // Could return a placeholder image here
              throw error;
            });
        })
    );
    return;
  }

  // Static assets strategy (cache-first with network fallback)
  if (
    request.destination === 'script' ||
    request.destination === 'style' ||
    request.destination === 'font' ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.css')
  ) {
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            console.log('[ServiceWorker] Serving cached asset:', url.pathname);
            // Return cached version but update cache in background
            fetch(request).then((networkResponse) => {
              caches.open(STATIC_CACHE).then((cache) => {
                cache.put(request, networkResponse);
              });
            });
            return cachedResponse;
          }

          // Not in cache, fetch from network
          return fetch(request)
            .then((networkResponse) => {
              const responseToCache = networkResponse.clone();
              caches.open(STATIC_CACHE).then((cache) => {
                cache.put(request, responseToCache);
              });
              return networkResponse;
            });
        })
    );
    return;
  }

  // Default: network-first for HTML and other requests
  event.respondWith(
    fetch(request)
      .then((networkResponse) => {
        // Optionally cache HTML pages for offline support
        if (request.destination === 'document') {
          const responseToCache = networkResponse.clone();
          caches.open(STATIC_CACHE).then((cache) => {
            cache.put(request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Fallback to cache for offline support
        return caches.match(request);
      })
  );
});

// Message event - for cache clearing or updates from main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => caches.delete(cacheName))
        );
      })
    );
  }

  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
