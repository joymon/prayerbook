
window.addEventListener("beforeinstallprompt", e => {
  e.prompt();
  // Wait for the user to respond to the prompt
  e.userChoice.then(choiceResult => {
    if (choiceResult.outcome === "accepted") {
      console.log("User accepted to install");
    } else {
      console.log("User dismissed the prompt");
    }
  });
});
window.addEventListener('appinstalled', (evt) => {
  console.log('a2hs', 'installed');
});
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js").then(function(reg) {
    console.log("Service Worker Registered at scope " + reg.scope);
  });
}
var app = angular.module("prayerBook", ["ui.bootstrap"]);
app.service("GAAPI", ["$http", GAAPI]);
app.controller("MainCtrl", [
  "$scope",
  "$http",
  "$sce",
  "$modal",
  "GAAPI",
  MainCtrl
]);
app.controller("DevCreditsCtrl", DevCreditsCtrl);
