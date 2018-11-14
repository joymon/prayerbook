import angular = require("angular");
export default function MainCtrl($scope, $http, $sce, $modal, GAAPI) {
  GAAPI.getPageViews().then(function(response) {
    $scope.pageviews = response.data.rows[0][0];
  });
  $scope.isOnline = navigator.onLine;
  $scope.showCredits = function() {
    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: "views/modals/devCredits.html",
      controller: "DevCreditsCtrl",
      size: "sm",
      resolve: {}
    });

    modalInstance.result.then(
      function(selectedItem) {
        //Nothing to do
      },
      function() {
        //Nothing to do
      }
    );
  };
}
