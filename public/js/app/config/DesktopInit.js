require.config({
  baseUrl: "./js/",
  paths: {
    // Core Libraries
    // --------------
    "modernizr": "libs/modernizr-2.6.2.min",
    "jquery": "libs/jquery-1.9.1.min",
    "underscore": "libs/lodash-1.0.1.min",
    "backbone": "libs/backbone-0.9.10.min",

    // Plugins
    // --------------
    "backbone.validateAll": "libs/plugins/backbone-validateAll-0.1.0",
    "text": "libs/plugins/require-text-2.0.5",

    // Application Folders
    // -------------------
    "collections": "app/collections",
    "models": "app/models",
    "routers": "app/routers",
    "templates": "app/templates",
    "views": "app/views"
  },
  shim: {
    "jquery": ["modernizr"],
    "underscore": {
      exports: "_"
    },
    "backbone": {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },
    "backbone.validateAll": ["backbone"]
  }
});

require([
    "jquery",
    "backbone",
    "routers/DesktopRouter",
    "backbone.validateAll"
  ], function($, Backbone, DesktopRouter) {

    // Instantiates a new Desktop Router instance
    new DesktopRouter();

});