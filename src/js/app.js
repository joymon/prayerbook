import angular from "angular";
import 'bootstrap'
import uibootstrap from "angular-ui-bootstrap";
import sanitize from "angular-sanitize";
import accordion from 'angular-ui-bootstrap/src/accordion';
import 'bootstrap/dist/css/bootstrap.min.css'
require("./ga.js");
require("./fbComments.js");
require("./serviceworker-reg");

import GAAPI from "./services/GAAPI";
import DevCreditsCtrl from "./controllers/DevCreditsCtrl";
import MainCtrl from "./controllers/MainCtrl";

var app = angular.module("prayerBook", ["ui.bootstrap", "ngSanitize",accordion]);
app.config(['$sceDelegateProvider' , function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    "self",
    // Allow loading from our assets domain.  Notice the difference between * and **.
    "https://gasuperproxyapi.appspot.com/**"
  ]);
}]);
app.service("GAAPI", ["$http", "$sce", GAAPI]);
app.controller("MainCtrl", [
  "$scope",
  "$http",
  "$sce",
  "$uibModal",
  "GAAPI",
  MainCtrl
]);
app.controller("DevCreditsCtrl", ["$scope","$uibModalInstance",DevCreditsCtrl]);
