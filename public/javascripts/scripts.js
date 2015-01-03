function ScrollCtrl($scope, $location, $anchorScroll) {
  $scope.gotoMain = function (){
    // set the location.hash to the id of
    // the element you wish to scroll to.
    $location.hash('maincontent');

    // call $anchorScroll()
    $anchorScroll();
  };
}