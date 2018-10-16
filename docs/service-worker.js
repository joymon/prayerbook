var CACHE_NAME = "pb-site-cache-v0.0.1261";
var urlsToCache = [
  "/",
  "index.html",
  "main.bundle.js",
  "vendors.bundle.js"
];
self.addEventListener("install", function(event) {
  // Perform install steps
  console.log("[ServiceWorker] Install");
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log("[ServiceWorker] Install - New cache created. Name" + CACHE_NAME);
      return cache.addAll(urlsToCache);
    })
  );
});
self.addEventListener("activate", function(e) {
  console.log("[ServiceWorker] Activate");
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(
        keyList.map(function(key) {
          if (key !== CACHE_NAME) {
            console.log("[ServiceWorker] Removing old cache as new SW activated. key = "+ key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim();
});
self.addEventListener("fetch", function(event) {
  //console.log("[ServiceWorker] Fetch", event.request.url);
  if (event.request.url.indexOf("http") === 0 && event.request.method === 'GET') {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.match(event.request).then(function(cachedResponse) {
          return (
            cachedResponse ||
            fetch(event.request).then(function(liveResponse) {
              cache.put(event.request, liveResponse.clone());
              console.log("Obtained from internet and put into cache for the url "+ event.request.url);
              return liveResponse;
            })
          );
        });
      })
    );
  } else {
    console.log("cancel somehow as its chrome://");
  }
});
