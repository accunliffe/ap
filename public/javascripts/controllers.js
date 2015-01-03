'use strict';

/* Controllers */

function AppCtrl($scope, $http) {
  $http({method: 'GET', url: '/api/name'}).
  success(function(data, status, headers, config) {
    $scope.name = data.name;
  }).
  error(function(data, status, headers, config) {
    $scope.name = 'Error!'
  });
}

function MyCtrl1() {
}
MyCtrl1.$inject = [];

function MyCtrl2() {
}
MyCtrl2.$inject = [];

function MyCtrl3() {
}
MyCtrl3.$inject = [];

function MyCtrl4() {
}
MyCtrl4.$inject = [];

function floatCtrl($scope) {
  $scope.floater = false;
  console.log('floating')
  $scope.dude = function(){$scope.clicked = true;};
}

function ModalDemoCtrl($scope, $modal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'partials/myModalContent',
      controller: ModalInstanceCtrl,
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
};

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  //$scope.upload = function () {
    //$modalInstance.close($scope.selected.item);
  //};

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};

var ButtonsCtrl = function ($scope) {
  $scope.checkModel = {
    left: false,
    middle: true,
    right: false
  };
};
