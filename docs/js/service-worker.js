var CACHE_NAME = 'pb-site-cache-v1';
var urlsToCache = [
  './js/app.js',
  './js/ga.js',
  './index.html',
  './js/controllers/MainCtrl.js',
  './js/controllers/DevCreditsCtrl.js',
  './js/services/GAAPI.js'
];
self.addEventListener('install', function(event) {
  // Perform install steps
  console.log('[ServiceWorker] Install');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});
self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function(keyList) {
          return Promise.all(keyList.map(function(key) {
            if (key !== cacheName) {
              console.log('[ServiceWorker] Removing old cache', key);
              return caches.delete(key);
            }
          }));
        })
      );
      return self.clients.claim();
  });
  self.addEventListener('fetch', function(event) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.match(event.request).then(function (response) {
          return response || fetch(event.request).then(function(response) {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
  });