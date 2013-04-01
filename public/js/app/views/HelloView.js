// Hello.js
// -------
define(["jquery", "backbone", "text!templates/Home/hello.html"],
  function($, Backbone, HelloHTML){

    var HelloView = Backbone.View.extend({
      template: HelloHTML,
      events: {
        "click .remove-cookie": "removeCookie",
        "click .auth": "auth"
      },
      auth: function(e){
        e.preventDefault();
        var url = window.location.protocol + "//" + window.location.host + "/connect";
        this.dialog = window.open(url,"_blank","width=400,height=500");
      },
      removeCookie: function(e) {
        e.preventDefault();
        $.removeCookie("auth");
        console.log("Cookie removed.");
      },
      render: function() {
        this.$el.html(this.template);
        return this;
      }
    });

    return HelloView;

  }
);