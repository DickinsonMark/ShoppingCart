(function() {
  'use strict';

  angular.module('shoppingCartApp')
  .filter('yesOrNo', yesOrNo);

  function yesOrNo() {
    return function(input) {
      var result = '';
      input ? result = 'Yes' : result = 'No';
      return result;
    }
  }
}());
