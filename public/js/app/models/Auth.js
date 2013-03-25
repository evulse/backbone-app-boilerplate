// models/Auth.js
// --------
define(["jquery", "backbone", "helpers/Validator"],
  function($, Backbone, Validator) {

    var AuthModel = Backbone.Model.extend({
      defaults: {
        "client_id": "not_set",
        "code": "not_set",
        "client_secret": "not_set"
      },
      initialize: function() {
        this.fetch();
      },
      fetch: function() {
        this.set($.cookies().read_JSON("auth"));
      },
      save: function(attr) {
        $.cookies().replace("auth", "client_id", attr.client_id);
        $.cookies().replace("auth", "code", attr.code);
        $.cookies().replace("auth", "client_secret", attr.client_secret);
      },
      validate: function(attrs) {
        // var errors = this.errors = {};
        // if(attrs.client_secret !== null) {
        //   if(!Validator.rules.thisLength(attrs.client_secret, 36)) errors.client_secret = "client_secret length deos not match";
        // }
      }
    });

    // Returns the Model class
    return AuthModel;
  }
);
