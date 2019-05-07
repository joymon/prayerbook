//Below version will be patched by the \build with latest build number.
var CACHE_NAME = "pb-site-cache-v0.0.1275";

var urlsToCache = [
  "/",
  "favicon.ico",
  "index.html",
  "views/modals/devCredits.html",
  "views/prayers.component.html",
  "main.bundle.js",
  "vendors.bundle.js"
];
self.addEventListener("install", function(event) {
  // Perform install steps
  console.log("[Service-Worker] Install");
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log(
        "[Service-Worker] Install - New cache created. Name" + CACHE_NAME
      );
      return cache.addAll(urlsToCache);
    })
  );
});
self.addEventListener("activate", function(e) {
  console.log("[Service-Worker] Activate");
  send_message_to_all_clients("activated");
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(
        keyList.map(function(key) {
          if (key !== CACHE_NAME) {
            console.log(
              "[Service-Worker] Removing old cache as new SW activated. key = " +
                key
            );
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
  if (
    event.request.url.indexOf("http") === 0 &&
    event.request.method === "GET"
  ) {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.match(event.request).then(function(cachedResponse) {
          return (
            cachedResponse ||
            fetch(event.request).then(function(liveResponse) {
              cache.put(event.request, liveResponse.clone());
              console.log(
                "Obtained from internet and put into cache for the url " +
                  event.request.url
              );
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
self.addEventListener('message', function(event){
  console.log("[Service-Worker]  Received Message: " + event.data + " .Responding Hello back!");
  event.ports[0].postMessage("SW Says 'Hello back!'");
});
function send_message_to_all_clients(msg) {
  clients.matchAll().then(matchedClients => {
    console.log(`[Service-Worker] broad casting message ${matchedClients.length}`);
    matchedClients.forEach(client => {
      send_message_to_client(client, msg).then(m =>
        console.log("[Service-Worker] Received Message: " + m)
      );
    });
  });
}

function send_message_to_client(client, msg) {
  return new Promise(function(resolve, reject) {
    var msg_chan = new MessageChannel();
    msg_chan.port1.onmessage = function(event) {
      if (event.data.error) {
        reject(event.data.error);
      } else {
        resolve(event.data);
      }
    };
    client.postMessage("SW Says: '" + msg + "'", [msg_chan.port2]);
  });
}
