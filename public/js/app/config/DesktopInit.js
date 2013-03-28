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
    "backbone.queryparams": "libs/plugins/backbone.queryparams",
    "bootstrap": "libs/plugins/bootstrap-2.3.1.min",
    "text": "libs/plugins/require-text-2.0.5",
    "json": "libs/JSON3-3.2.4.min",
    "jquery.cookie": "libs/plugins/jquery-cookie",

    // Application Folders
    // -------------------
    "collections": "app/collections",
    "models": "app/models",
    "helpers": "app/helpers",
    "routers": "app/routers",
    "templates": "app/templates",
    "layout": "app/templates/Layout",
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
    "backbone.queryparams": ["backbone"],
    "bootstrap": "libs/plugins/bootstrap-2.3.1.min",
    "text": "libs/plugins/require-text-2.0.5",
    "json": "libs/JSON3-3.2.4.min",
    "jquery.cookie": "libs/plugins/jquery-cookie",

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
    "backbone.queryparams": ["backbone"],
    "backbone.layoutmanager": ["backbone"],
    "bootstrap": ["jquery"],
    "helpers/auth": ["backbone"],
    "jquery.cookie": ["jquery","json"]
  }
});

require([
    "jquery",
    "backbone",
    "routers/DesktopRouter",
    "helpers/Cookie",
    "backbone.validateAll",
    "bootstrap"
  ], function($, Backbone, DesktopRouter, Cookie) {
      // Set cookies
      Cookie.set_defaults();
      // Instantiates a new Desktop Router instance
      new DesktopRouter();
});