import angular = require("angular");
import "bootstrap";
import uibootstrap = require("angular-ui-bootstrap");
import sanitize = require("angular-sanitize");
import "bootstrap/dist/css/bootstrap.min.css";
require("./ga");
require("./fbComments");
import GAAPI from "./services/GAAPI";
import prayerService from "./services/prayerService";
import DevCreditsCtrl from "./controllers/DevCreditsCtrl";
import MainCtrl from "./controllers/MainCtrl";
import { PrayerModule } from "./controllers/prayers.component";
export default class App {
  public load(): void {
    var app = angular.module("prayerBook", [uibootstrap, sanitize]);
    app.config([
      "$sceDelegateProvider",
      function($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
          // Allow same origin resource loads.
          "self",
          // Allow loading from our assets domain.  Notice the difference between * and **.
          "https://gasuperproxyapi.appspot.com/**"
        ]);
      }
    ]);
    app.service("GAAPI", ["$http", "$sce", GAAPI]);
    app.service("PrayerService", ["$http", prayerService]);
    app.controller("MainCtrl", [
      "$scope",
      "$http",
      "$sce",
      "$uibModal",
      "GAAPI",
      MainCtrl
    ]);
    app.controller("DevCreditsCtrl", [
      "$scope",
      "$uibModalInstance",
      DevCreditsCtrl
    ]);
    app.component("prayers", new PrayerModule.PrayerComponent());
    angular.bootstrap(document, ["prayerBook"]);
  }
}
