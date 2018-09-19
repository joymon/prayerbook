import angular from 'angular'
import uibootstrap from 'angular-ui-bootstrap'
require('./ga.js');
require('./fbComments.js');
require('./serviceworker-reg');
import GAAPI from './services/GAAPI'
import DevCreditsCtrl from './controllers/DevCreditsCtrl'
import MainCtrl from './controllers/MainCtrl'

var app = angular.module("prayerBook", ["ui.bootstrap"]);
app.service("GAAPI", ["$http", GAAPI]);
console.log(MainCtrl);
app.controller("MainCtrl", [
  "$scope",
  "$http",
  "$sce",
  "$uibModal",
  "GAAPI",
  MainCtrl
]);
app.controller("DevCreditsCtrl", DevCreditsCtrl);
