'use strict';

angular.module('webapp')
  .config(['$stateProvider', 
  function ($stateProvider) {
    $stateProvider
      .state('products', {
        url: '/products',
        templateUrl: 'scripts/products/products.html',
        controller: 'ProductsCtrl'
      });
  }]);