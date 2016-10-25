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
    vm.addToCart = addToCart;
    vm.cart = getCartInfo('cart');
    vm.subtotal = getCartInfo('subtotal');
    vm.tax = getCartInfo('tax');
    vm.total = getCartInfo('total');

    function getUniqueCategories() {
      let categories = [];
      vm.inventory.map((item) => {
        item.categories.forEach(category => {
          if (categories.indexOf(category) === -1) categories.push(category);
        });
      });
      return categories;
    }

    function addToCart(item, quantity = 1) {
      const priceArray = item.price.toString().split('');
      priceArray.splice((priceArray.length - 2), 0, '.');
      const price = parseFloat(priceArray.join(''));
      cartService.subtotal += (price * quantity);
      cartService.tax = (cartService.subtotal * 0.0816);
      cartService.total = cartService.subtotal + cartService.tax;
      const searchID = cartService.cart.findIndex(curr => curr.item._id === item._id);
      if (searchID === -1) {
        cartService.cart.push({item: item, quantity: Number(quantity)});
      } else {
        cartService.cart[searchID].quantity += Number(quantity);
      }
      vm.subtotal = getCartInfo('subtotal');
      vm.tax = getCartInfo('tax');
      vm.total = getCartInfo('total');
    }

    function getInventory() {
      return inventoryService.inventory;
    }

    function getCartInfo(arg) {
      return cartService[arg];
    }
  }

})();
