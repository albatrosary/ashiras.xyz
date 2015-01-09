'use strict';

angular.module('webapp')
  .config(['$stateProvider', 
  function ($stateProvider) {
    $stateProvider
      .state('result', {
        url: '/result.html',
        templateUrl: 'scripts/result/result.html',
        controller: 'ResultCtrl'
      });
  }]);