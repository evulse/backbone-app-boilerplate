// DesktopRouter.js
// ----------------
define(["jquery", "backbone", "models/Model", "views/View", "collections/Collection", "helpers/Cookie", "backbone.queryparams"],
  function($, Backbone, Model, View, Collection) {
    var DesktopRouter = Backbone.Router.extend({
      initialize: function() {
        Backbone.history.start({pushState: true});
      },
      // All Routes
      routes: {
        "redirect": "redirect",
        // When there is no hash on the url, the home method is called
        "": "index"
      },
      index: function() {
        new View();
      },
      redirect: function(params){
        for(var key in params){
          $.cookies().replace("auth", key, params[key]);
        }
        window.opener.location.reload();
        window.close();
      }
    });
    return DesktopRouter;
  }
);