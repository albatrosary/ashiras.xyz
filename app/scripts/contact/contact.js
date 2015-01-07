'use strict';

angular.module('webapp')
  .config(['$stateProvider', 
  function ($stateProvider) {
    $stateProvider
      .state('contact', {
        url: '/contact',
        templateUrl: 'scripts/contact/contact.html',
        controller: 'ContactCtrl'
      });
  }]);