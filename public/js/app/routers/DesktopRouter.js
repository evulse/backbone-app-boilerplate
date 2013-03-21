// DesktopRouter.js
// ----------------
define(["jquery", "backbone", "models/Model", "views/View", "views/Auth", "collections/Collection"],
  function($, Backbone, Model, View, authView, Collection) {
    var DesktopRouter = Backbone.Router.extend({
      initialize: function() {
        // Tells Backbone to start watching for hashchange events
        Backbone.history.start({pushState: true});
      },
      // All of your Backbone Routes (add more)
      routes: {
        // When there is no hash on the url, the home method is called
        "": "index"
      },
      index: function() {
        // Instantiates a new view which will render the header text to the page
        new View();
        new authView();
      }
    });

    // Returns the DesktopRouter class
    return DesktopRouter;
  }
);