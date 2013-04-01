// models/Auth.js
// --------
define(["jquery", "backbone", "helpers/Validator", "jquery.cookie"],
  function($, Backbone, Validator) {

    var AuthModel = Backbone.Model.extend({
      defaults: {
        "code": undefined,
        "access_token": undefined
      },
      initialize: function() {
        this.fetch();
      },
      fetch: function() {
        this.set($.cookies().read_JSON("auth"));
      },
      save: function(attr) {
        if(typeof(attr.code) !== "undefined"){ $.cookies().replace("auth", "code", attr.code);}
        if(typeof(attr.access_token) !== "undefined"){$.cookies().replace("auth", "access_token", attr.access_token);}
      }
    });

    return AuthModel;
  }
);
