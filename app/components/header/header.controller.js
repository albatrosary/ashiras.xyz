'use strict';

angular.module('webapp')
  .controller('HeaderCtrl', ['$scope',
  function ($scope) {
  	var MenuProperties = {'home':false, 'about':false, 'contact':false};
  	$scope.menu = [];

  	for (var prop in MenuProperties) {
      $scope.menu[prop] = MenuProperties[prop];
    }
    $scope.menu['home'] = true;
  	$scope.onClick = function (pages) {
  	  for (var prop in MenuProperties) {
        $scope.menu[prop] = MenuProperties[prop];
      }
      $scope.menu[pages] = true;
    };
  }]);
