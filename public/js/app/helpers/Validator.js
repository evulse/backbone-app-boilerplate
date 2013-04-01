// helpers/Validator.js
// --------
define(["backbone.validateAll"], function(){
  var patterns = {
    specialCharacters: "[^a-zA-Z 0-9]+",
    digits: "[0-9]",
    email: "^[a-zA-Z0-9._-]+@[a-zA-Z0-9][a-zA-Z0-9.-]*[.]{1}[a-zA-Z]{2,6}$",
    phone: "^([0-9]{3})?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$"
  };
  return {
    exactLength: function(value, thisLength) {
      return value.length == thisLength;
    },
    minLength: function(value, minLength) {
      return value.length >= minLength;
    },
    maxLength: function(value, maxLength) {
      return value.length <= maxLength;
    },
    pattern: function(value, pattern) {
      return new RegExp(pattern, "gi").test(value) ? true : false;
    },
    isEmail: function(value) {
      return this.pattern(value, patterns.email);
    },
    isPhone: function(value) {
      return this.pattern(value, patterns.phone);
    },
    hasSpecialCharacter: function(value) {
      return this.pattern(value, patterns.specialCharacters);
    },
    hasDigit: function(value) {
      return this.pattern(value, patterns.digits);
    }
  };
});