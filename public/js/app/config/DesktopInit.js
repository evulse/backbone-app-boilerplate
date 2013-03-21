require.config({
  baseUrl: "./js/",
  urlArgs: "cache=" + Math.random(),
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
    "jquery.cookie": "libs/plugins/jquery-cookie-1.3.1",

    // Application Folders
    // -------------------
    "collections": "app/collections",
    "models": "app/models",
    "helpers": "app/helpers",
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
    "backbone.validateAll": ["backbone"],
    "helpers/auth": ["backbone"],
    "jquery.cookie": ["jquery"]
  }
});

require([
    "jquery",
    "backbone",
    "routers/DesktopRouter",
    "helpers/Cookie",
    "backbone.validateAll"
  ], function($, Backbone, DesktopRouter, Cookie) {
    // Set cookies
    Cookie.setDefaults();
    // Instantiates a new Desktop Router instance
    new DesktopRouter();
});