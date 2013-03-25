// helpers/Validator.js
// --------
define(["jquery", "backbone"],
  function($, Backbone) {

    var validator = {
      patterns: {
        specialCharacters: "[^a-zA-Z 0-9]+",
        digits: "[0-9]",
        email: "^[a-zA-Z0-9._-]+@[a-zA-Z0-9][a-zA-Z0-9.-]*[.]{1}[a-zA-Z]{2,6}$",
        phone: "^([0-9]{3})?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$"
      },
      rules: {
        thisLength: function(value, thisLength) {
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
          return this.rules.pattern(value, this.patterns.email);
        },
        isPhone: function(value) {
          return this.rules.pattern(value, this.patterns.phone);
        },
        hasSpecialCharacter: function(value) {
          return this.rules.pattern(value, this.patterns.specialCharacters);
        },
        hasDigit: function(value) {
          return this.rules.pattern(value, this.patterns.digits);
        }
      }
    };

    // Returns the Model class
    return validator;
  }
);
