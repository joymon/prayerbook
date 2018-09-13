if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js").
  then(function(reg) {
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
