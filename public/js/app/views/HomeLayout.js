// Home.js
// -------
define(["jquery", "backbone", "helpers/Layout", "views/HelloView", "text!layout/home.html"],
  function($, Backbone, Layout, HelloView, HomeLayoutHTML){

    var HomeLayout = Layout.extend({
      el: ".main-layout",
      template: HomeLayoutHTML,
      subviews: {
        ".hello": new HelloView()
      }
    });

    return HomeLayout;

  }
);