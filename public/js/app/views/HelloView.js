// Hello.js
// -------
define(["jquery", "backbone", "text!templates/Home/hello.html"],
  function($, Backbone, HelloHTML){

    var HelloView = Backbone.View.extend({
      template: HelloHTML,
      render: function() {
        this.$el.html(this.template);
        return this;
      }
    });

    // Returns the View class
    return HelloView;
  }
);