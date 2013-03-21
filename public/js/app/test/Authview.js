// Auth.js
// -------
define(["jquery", "backbone", "text!templates/Auth/guest.html", "helpers/auth"],
  function($, Backbone, guest){

    // _.extend(Backbone.OAuth.configs.app, {
    //   client_id: "c67f0160-7aad-4aa5-8a88-92bbd6f02a4c",
    //   scope: "*",
    //   redirect_url: window.location.protocol + '//' + window.location.host + '/redirect',
    //   // Called after successful authentication.
    //   onSuccess: function(params) {
    //     console.log("successful");
    //   }
    // });

    var Auth = Backbone.View.extend({
      el: ".auth",
      initialize: function() {
        this.render();
      },
      events: {
        "click p" : "startAuth"
      },
      startAuth : function(){
        // var testAuth = new Backbone.OAuth(Backbone.OAuth.configs.app);
        // testAuth.auth();
      },
      render: function() {
        this.template = _.template(guest, {});
        this.$el.html(this.template);
        return this;
      }
    });

    return Auth;
  }
);