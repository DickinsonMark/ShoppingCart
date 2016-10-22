(function() {

  'use strict';
  $('select').material_select();

  angular
    .module('shoppingCartApp', [
      'ngRoute',
      'shoppingCartApp.service.inventory',
      'shoppingCartApp.service.cart',
      'shoppingCartApp.config',
      'shoppingCartApp.components.main'
    ]);

})();
