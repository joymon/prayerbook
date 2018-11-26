import angular = require("angular");
import "bootstrap";
import uibootstrap = require("angular-ui-bootstrap");
import sanitize = require("angular-sanitize");
import "bootstrap/dist/css/bootstrap.min.css";
require("./ga");
require("./fbComments");
import GAAPI from "./services/GAAPI";
import prayerService from "./services/prayerService";
import DevCreditsComponent from "./controllers/DevCredits.component";
import { PrayerComponent } from "./controllers/prayers.component";
import MainComponent from "./controllers/main.component";
import InternetMonitoringService from "./services/InternetMonitoringService"
  import { format } from "util";
export default class App {
  public load(): void {
    var app = angular.module("prayerBook", [uibootstrap,sanitize]);
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
    app.service("InternetMonitoringService",InternetMonitoringService);

    app.component("devcredits", new DevCreditsComponent());
    app.component("prayers", new PrayerComponent());
    app.component("main", new MainComponent());
    angular.bootstrap(document, ["prayerBook"]);
  }
}
