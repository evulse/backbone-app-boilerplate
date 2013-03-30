// DesktopRouter.js
// ----------------
define(["jquery", "backbone", "views/HomeLayout", "views/AuthView", "backbone.queryparams"],
  function($, Backbone, HomeLayout, AuthView) {

    var DesktopRouter = Backbone.Router.extend({
      initialize: function() {
        Backbone.history.start({pushState: true});
      },
      // All Routes
      routes: {
        "connect": "connect",
        // When there is no hash on the url, the home method is called
        "": "index"
      },
      index: function() {
        new HomeLayout();
      },
      connect: function(params){
        new AuthView().start(params);
      }
    });
    return DesktopRouter;
  }
);