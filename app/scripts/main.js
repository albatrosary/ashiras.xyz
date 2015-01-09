'use strict';

angular.module('webapp', [
    'ui.router',
    'pdf'
  ])
  .config(['$locationProvider', '$urlRouterProvider',
  function ($locationProvider, $urlRouterProvider) {

    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

  }
]);
