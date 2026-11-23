/* ============================================
   Service Worker — KI Portfolio
   Cache-first strategy for offline support
   ============================================ */

const CACHE_NAME = 'ki-portfolio-v2';

const PRECACHE_ASSETS = [
  '/index.html',
  '/portfolio.html',
  '/portfolio-details.html',
  '/manifest.json',
  '/assets/css/bootstrap.min.css',
  '/assets/css/slick.css',
  '/assets/css/slick-theme.css',
  '/assets/css/aos.css',
  '/assets/css/feature.css',
  '/assets/css/style.css',
  '/assets/css/devicon.min.css',
  '/assets/fonts/devicon.woff',
  '/assets/js/jquery.min.js',
  '/assets/js/bootstrap.min.js',
  '/assets/js/slick.min.js',
  '/assets/js/aos.js',
  '/assets/js/feather.min.js',
  '/assets/js/main.js',
  '/assets/images/logo/logo-2.png',
  '/assets/images/slider/banner-01T.png',
  '/assets/images/favicon.ico',
  '/assets/resume/Khairul_Islam_Resume.pdf'
];

/* --- Install: pre-cache critical assets --- */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

/* --- Activate: clean up old caches --- */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

/* --- Fetch: cache-first, network fallback --- */
self.addEventListener('fetch', event => {
  /* Only handle GET requests for same origin */
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        /* Cache valid same-origin responses */
        if (
          response &&
          response.status === 200 &&
          response.type === 'basic'
        ) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, clone);
          });
        }
        return response;
      });
    })
  );
});
