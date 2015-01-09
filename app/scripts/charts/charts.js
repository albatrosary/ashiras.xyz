'use strict';

angular.module('webapp')
  .config(['$stateProvider', 
  function ($stateProvider) {
    $stateProvider
      .state('charts', {
        url: '/charts.html',
        templateUrl: 'scripts/charts/charts.html',
        controller: 'ChartsCtrl'
      });
  }]);