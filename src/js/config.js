(function() {

  'use strict';

  angular
    .module('shoppingCartApp.config', [])
    .config(appConfig);

  appConfig.$inject = ['$routeProvider'];

  function appConfig($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'js/components/main/main.view.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl'
    }).when('/checkout', {
      templateUrl: 'js/components/checkout/checkout.view.html',
      controller: 'checkoutController',
      controllerAs: 'checkCtrl'
    });
  }

})();
