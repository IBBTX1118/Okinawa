const CACHE_NAME = 'okinawa-trip-v10';
const STATIC_ASSETS = [
  './',
  './index.html',
  './Okinawa.html',
  './itinerary-data.js',
  './manifest.json',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
  './icon-v2.png',
  './avatar.png',
  './shisa-art.jpg',
  './hero-art.jpg',
  './thumb-ashibinaa.jpg',
  './thumb-jacksteak.jpg',
  './thumb-kyoda.jpg',
  './thumb-manzamo.jpg',
  './thumb-kouri.jpg',
  './thumb-heartrock.jpg',
  './thumb-ufuya.jpg',
  './thumb-churaumi.jpg',
  './thumb-starbucks.jpg',
  './thumb-aw.jpg',
  './thumb-parcocity.jpg',
  './thumb-american.jpg',
  './thumb-naminoue.jpg',
  './thumb-senagajima.jpg',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+TC:wght@400;500;700&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching static assets for offline use');
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('[Service Worker] Some non-critical asset caching skipped:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Removing old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Weather API: Network first, cache fallback
  if (url.hostname.includes('open-meteo.com')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
    return;
  }

  // Static Assets & CDN: Cache first, fallback to network
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'opaque') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        // Fallback to offline home page if HTML navigation fails
        if (event.request.mode === 'navigate') {
          return caches.match('./Okinawa.html');
        }
      });
    })
  );
});
