(function() {
  'use strict';

  angular.module('shoppingCartApp.service.cart', [])
  .service('cartService', [CartService]);

  function CartService() {
    const self = this;
    self.cart = [];
    self.subtotal = 0;
    self.tax = 0;
    self.total = 0;

  }
}());
