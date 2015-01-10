'use strict';

angular.module('webapp')
  .config(['$stateProvider', 
  function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        template: '',
        controller: 'HomeCtrl'
      });
  }]);