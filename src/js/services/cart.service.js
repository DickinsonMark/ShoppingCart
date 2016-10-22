(function() {
  'use strict';

  angular.module('shoppingCartApp.service.cart', [])
  .service('cartService', [CartService]);

  function CartService() {
    const vm = this;
    vm.cart = [];
  }
}());
