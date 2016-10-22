(function() {
  'use strict';

  angular.module('shoppingCartApp')
  .filter('makeMoney', makeMoney);

  function makeMoney() {
    return function(input) {
      const inputArray = input.toString().split('');
      inputArray.splice((inputArray.length - 2), 0, '.');
      return inputArray.join('');
    };
  }
}());
