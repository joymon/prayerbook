export default function MainCtrl($scope, $http, $sce, $modal, GAAPI) {
  //alert("controller loaded");
  $scope.prayers = [];
  $http.get("data/prayers.json").then(function(response) {
    response.data.forEach((prayer, index) => {
      prayer.id = index;
      $scope.prayers.push({ id: prayer.id, title: prayer.title, content: "" });
      downloadPrayerContent(prayer);
    });
  });
  $scope.currentPage = 1;
  $scope.pageChanged = function() {
    $log.log("Page changed to: " + $scope.currentPage);
  };
  GAAPI.getPageViews().then(function(response) {
    $scope.pageviews = response.data.rows[0][0];
  });
  function downloadPrayerContent(prayer) {
    var path = "data/" + prayer.path;
    $http.get(path).then(function(response) {
      var prayervm = getPrayervmByIdFromScope(prayer.id);
      prayervm.content = response.data;
    });
  }
  function getPrayervmByIdFromScope(id) {
    var prayervm;
    angular.forEach($scope.prayers, function(value, key) {
      if (value.id === id) {
        prayervm = value;
      }
    });
    return prayervm;
  }
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
  $scope.renderHTML = function(html) {
    if (typeof html !== "string") {
      html = html.join("");
    }
    return $sce.trustAsHtml(html);
  };
}
