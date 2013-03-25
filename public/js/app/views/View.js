// View.js
// -------
define(["jquery", "backbone", "models/Model", "views/Auth", "text!templates/hello.html"],
  function($, Backbone, Model, AuthView, template){

    var View = Backbone.View.extend({
      // The DOM Element associated with this view
      el: ".hello",
      // View constructor
      initialize: function() {
        this.render();
      },
      events: {

      },
      // Renders the view's template to the UI
      render: function() {
        this.template = _.template(template, {});
        this.$el.html(this.template);
        new AuthView();
        return this;
      }
    });

    // Returns the View class
    return View;
  }
);