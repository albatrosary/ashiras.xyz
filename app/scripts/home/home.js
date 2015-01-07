'use strict';

angular.module('webapp')
  .config(['$stateProvider', 
  function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'scripts/home/home.html',
        controller: 'HomeCtrl'
      });
  }]);