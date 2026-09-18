const CACHE_NAME = 'okinawa-trip-v33';
const STATIC_ASSETS = [
  './',
  './index.html',
  './Okinawa.html',
  './itinerary-data.js',
  './manifest.json',
  './car-z4.png',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
  './avatar.png',
  './shisa-art.jpg',
  './hero-art.jpg',
  './thumb-airport.jpg',
  './thumb-ashibinaa.jpg',
  './thumb-nesthotel.jpg',
  './thumb-jacksteak.jpg',
  './thumb-kokusaidori-night.jpg',
  './thumb-naminoue.jpg',
  './thumb-turner.jpg',
  './thumb-heatsports.jpg',
  './thumb-kyoda.jpg',
  './thumb-kouri.jpg',
  './thumb-kourishrimp.jpg',
  './thumb-heartrock.jpg',
  './thumb-ufuya.jpg',
  './thumb-churaumi.jpg',
  './thumb-starbucks.jpg',
  './thumb-manzamo.jpg',
  './thumb-aw.jpg',
  './thumb-blueseal.jpg',
  './thumb-parcocity.jpg',
  './thumb-american.jpg',
  './thumb-shuri.jpg',
  './thumb-daruma.jpg',
  './thumb-kaichu.jpg',
  './thumb-hanon.jpg',
  './thumb-ryukyu-beef.jpg',
  './thumb-senagajima.jpg',
  './thumb-makishi.jpg',
  './thumb-calbee.jpg',
  './thumb-mainplace.jpg',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+TC:wght@400;500;700&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching static assets for offline use (v30)');
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

  // 1. Weather API: Network first, cache fallback
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
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // 2. App Code (HTML & JS): Network-first with cache fallback
  // Ensures fresh updates when online, seamless offline fallback
  const isAppCode = event.request.mode === 'navigate' ||
                    url.pathname.endsWith('.html') ||
                    url.pathname.endsWith('.js') ||
                    url.pathname.endsWith('/');

  if (isAppCode && url.origin === location.origin) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(event.request).then((cached) => {
            if (cached) return cached;
            if (event.request.mode === 'navigate') return caches.match('./index.html');
          });
        })
    );
    return;
  }

  // 3. Static Assets (Images, Icons, CDNs): Cache first, fallback to network
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
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
