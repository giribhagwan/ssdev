const CACHE_NAME = 'scriptsprite-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/about.html',
  '/courses.html',
  '/portfolio.html',
  '/contact.html',
  '/latest-events.html',
  '/css/critical.css',
  '/css/bootstrap.min.css',
  '/css/style.css',
  '/js/bootstrap.min.js',
  '/js/custom.js',
  '/img/logo 2.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then(response => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            return response;
          });
      })
  );
}); 