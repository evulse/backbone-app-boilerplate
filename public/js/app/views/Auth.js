// views/Auth.js
// --------
define(["jquery", "backbone", "helpers/Cookie", "text!templates/Auth/guest.html"],
  function($, Backbone, Cookie, guest) {

    var Auth = Backbone.View.extend({
      el: ".auth",
      // View constructor
      initialize: function() {
        // Calls the view's render method
        this.render();
      },
      // View Event Handlers
      events: {

      },
      // Renders the view's template to the UI
      render: function() {
        // Setting the view's template property using the Underscore template method
        this.template = _.template(guest, {});
        // Dynamically updates the UI with the view's template
        this.$el.html(this.template);
        // Maintains chainability
        return this;
      }
    });

    return Auth;
  }
);