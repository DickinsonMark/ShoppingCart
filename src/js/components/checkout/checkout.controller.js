(function() {

  'use strict';

  angular
    .module('shoppingCartApp.components.checkout', [])
    .controller('checkoutController', checkoutController);

  checkoutController.$inject = ['cartService'];

  function checkoutController(cartService) {
    /*jshint validthis: true */
    const vm = this;

    vm.cart = getInfo('cart');
    vm.subtotal = getInfo('subtotal');
    vm.tax = getInfo('tax');
    vm.total = getInfo('total');
    vm.changeQuantity = changeQuantity;
    vm.removeItem = removeItem;
    vm.checkout = checkout;

    function getInfo(arg) {
      return cartService[arg];
    }

    function removeItem(item) {
      const priceArray = item.item.price.toString().split('');
      priceArray.splice((priceArray.length - 2), 0, '.');
      const price = parseFloat(priceArray.join(''));
      cartService.subtotal -= (price * item.quantity);
      cartService.tax = (cartService.subtotal * 0.0816);
      cartService.total = cartService.subtotal + cartService.tax;
      const quantity = item.quantity
      const itemIndex = cartService.cart.findIndex(curr => curr.item._id === item.item._id);
      cartService.cart.splice(itemIndex, 1);
      vm.cart = getInfo('cart');
      vm.subtotal = getInfo('subtotal');
      vm.tax = getInfo('tax');
      vm.total = getInfo('total');
    }

    function changeQuantity(num, item) {
      const priceArray = item.item.price.toString().split('');
      priceArray.splice((priceArray.length - 2), 0, '.');
      const price = parseFloat(priceArray.join(''));
      cartService.subtotal += (price * num);
      cartService.tax = (cartService.subtotal * 0.0816);
      cartService.total = cartService.subtotal + cartService.tax;
      if (item.quantity === 1 && num === -1) {
        const itemIndex = cartService.cart.findIndex(curr => curr.item._id === item.item._id);
        cartService.cart.splice(itemIndex, 1);
      } else {
        item.quantity += num;
      }
      vm.cart = getInfo('cart');
      vm.subtotal = getInfo('subtotal');
      vm.tax = getInfo('tax');
      vm.total = getInfo('total');
    }

    function checkout() {
      cartService.cart = [];
      cartService.subtotal = 0;
      cartService.tax = 0;
      cartService.total = 0;
      vm.cart = getInfo('cart');
      vm.subtotal = getInfo('subtotal');
      vm.tax = getInfo('tax');
      vm.total = getInfo('total');
    }
  }

})();
