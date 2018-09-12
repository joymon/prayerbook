
var app = angular.module('prayerBook', ['ui.bootstrap']);
app.service('GAAPI', ['$http', GAAPI]);
app.controller('MainCtrl', ['$scope', '$http', '$sce', '$modal','GAAPI', MainCtrl]);
app.controller('DevCreditsCtrl', DevCreditsCtrl);
