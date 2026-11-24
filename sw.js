/* ============================================
   Service Worker — Khairul Islam Portfolio
   Version: ki-portfolio-v3
   Strategy:
     - Cache-first for static assets (CSS, JS, images, fonts)
     - Network-first with offline cache fallback for HTML pages
   ============================================ */

const CACHE_NAME = 'ki-portfolio-v3';

const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/portfolio.html',
  '/404.html',
  '/manifest.json',
  '/assets/css/bootstrap.min.css',
  '/assets/css/slick.css',
  '/assets/css/slick-theme.css',
  '/assets/css/aos.css',
  '/assets/css/feature.css',
  '/assets/css/style.css',
  '/assets/css/devicon.min.css',
  '/assets/fonts/devicon.woff',
  '/assets/fonts/feather.woff',
  '/assets/fonts/Feather.ttf',
  '/assets/js/jquery.js',
  '/assets/js/jquery.min.js',
  '/assets/js/bootstrap.min.js',
  '/assets/js/slick.min.js',
  '/assets/js/aos.js',
  '/assets/js/feather.min.js',
  '/assets/js/main.js',
  '/assets/images/logo/logo-2.png',
  '/assets/images/logo/logo-2.webp',
  '/assets/images/logo/logos-circle.png',
  '/assets/images/logo/logos-circle.webp',
  '/assets/images/slider/banner-01T.png',
  '/assets/images/slider/banner-01T.webp',
  '/assets/images/icons/icon-72.png',
  '/assets/images/icons/icon-96.png',
  '/assets/images/icons/icon-128.png',
  '/assets/images/icons/icon-192.png',
  '/assets/images/icons/icon-512.png',
  '/assets/images/favicon.ico'
];

/* --- Install: Pre-cache critical core shell --- */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return Promise.allSettled(
          PRECACHE_ASSETS.map(url =>
            cache.add(url).catch(err => {
              console.warn(`[PWA] Failed to precache ${url}:`, err);
            })
          )
        );
      })
      .then(() => self.skipWaiting())
  );
});

/* --- Activate: Clean up old cache versions --- */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log(`[PWA] Purging outdated cache: ${key}`);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

/* Helper: Determine if request is for HTML navigation */
function isHtmlNavigation(request) {
  return request.mode === 'navigate' ||
    (request.method === 'GET' &&
     request.headers.get('accept') &&
     request.headers.get('accept').includes('text/html'));
}

/* Helper: Determine if request is static asset */
function isStaticAsset(url) {
  return /\.(?:css|js|woff|woff2|ttf|eot|svg|png|jpg|jpeg|webp|gif|ico|pdf)(?:\?.*)?$/i.test(url.pathname);
}

/* --- Fetch Event Handler --- */
self.addEventListener('fetch', event => {
  const request = event.request;

  /* Only handle GET requests */
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  /* Ignore non-HTTP(S) and third-party origins (except Google Fonts/APIs) */
  if (url.origin !== self.location.origin && !url.hostname.includes('fonts.gstatic.com') && !url.hostname.includes('fonts.googleapis.com')) {
    return;
  }

  /* Strategy A: Network-First for HTML navigation requests */
  if (isHtmlNavigation(request)) {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          }
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          if (cached) return cached;

          /* Try matching /index.html or /404.html fallback */
          const fallback = await caches.match('/index.html');
          if (fallback) return fallback;

          return caches.match('/404.html');
        })
    );
    return;
  }

  /* Strategy B: Cache-First for static assets */
  if (isStaticAsset(url) || url.origin !== self.location.origin) {
    event.respondWith(
      caches.match(request, { ignoreSearch: true }).then(cached => {
        if (cached) return cached;

        return fetch(request).then(response => {
          if (response && response.status === 200 && (response.type === 'basic' || response.type === 'cors')) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          }
          return response;
        }).catch(() => {
          /* Fallback for missing offline image if needed */
          return cached;
        });
      })
    );
    return;
  }

  /* Default Stale-While-Revalidate for other GET requests */
  event.respondWith(
    caches.match(request).then(cached => {
      const fetchPromise = fetch(request).then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
        }
        return response;
      }).catch(() => cached);

      return cached || fetchPromise;
    })
  );
});
