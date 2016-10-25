(function() {
  'use strict';

  angular.module('shoppingCartApp')
  .filter('yesOrNo', yesOrNo);

  function yesOrNo() {
    return function(input) {
      var result = '';
      result = input ? 'Yes' : 'No';
      return result;
    };
  }
}());
