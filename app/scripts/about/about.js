'use strict';

angular.module('webapp')
  .config(['$stateProvider', 
  function ($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'scripts/about/about.html',
        controller: 'AboutCtrl'
      });
  }]);