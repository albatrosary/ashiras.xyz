'use strict';

angular.module('webapp')
  .config(['$stateProvider', 
  function ($stateProvider) {
    $stateProvider
      .state('learning', {
        url: '/learning.html',
        templateUrl: 'scripts/learning/learning.html',
        controller: 'LearningCtrl'
      });
  }]);