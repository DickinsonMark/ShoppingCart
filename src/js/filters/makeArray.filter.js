(function() {
  'use strict';

  angular.module('shoppingCartApp')
  .filter('makeArray', makeArray);

  function makeArray() {
    return function(input) {
      return input.split(', ');
    };
  }
}());
