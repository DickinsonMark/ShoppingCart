(function() {

  'use strict';

  angular
    .module('shoppingCartApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', 'inventoryService', 'cartService'];

  function mainController($scope, inventoryService, cartService) {
    /*jshint validthis: true */
    const vm = this;
    vm.inventory = getInventory();
    vm.categories = getUniqueCategories();
    vm.cart = getCart();
    vm.addToCart = addToCart;

    function getUniqueCategories() {
      let categories = [];
      vm.inventory.map((item) => {
        item.categories.forEach(category => {
          if (categories.indexOf(category) === -1) categories.push(category);
        });
      });
      return categories;
    }

    function getInventory() {
      return inventoryService.inventory;
    }

    function getCart() {
      return cartService.cart;
    }

    function addToCart(item, quantity = 1) {
      const searchID = cartService.cart.findIndex(curr => curr.item._id === item._id);
      if (searchID === -1) {
        cartService.cart.push({item: item, quantity: Number(quantity)});
      } else {
        cartService.cart[searchID].quantity += Number(quantity);
      }
    }
  }

})();
