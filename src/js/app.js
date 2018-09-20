import angular from "angular";
import uibootstrap from "angular-ui-bootstrap";
import sanitize from "angular-sanitize";
require("./ga.js");
require("./fbComments.js");
require("./serviceworker-reg");
import GAAPI from "./services/GAAPI";
import DevCreditsCtrl from "./controllers/DevCreditsCtrl";
import MainCtrl from "./controllers/MainCtrl";

var app = angular.module("prayerBook", ["ui.bootstrap", "ngSanitize"]);
app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    "self",
    // Allow loading from our assets domain.  Notice the difference between * and **.
    "https://gasuperproxyapi.appspot.com/**"
  ]);
});
app.service("GAAPI", ["$http", "$sce", GAAPI]);
app.controller("MainCtrl", [
  "$scope",
  "$http",
  "$sce",
  "$uibModal",
  "GAAPI",
  MainCtrl
]);
app.controller("DevCreditsCtrl", DevCreditsCtrl);
