// Home.js
// -------
define(["jquery", "backbone", "helpers/Layout", "views/HelloView", "views/AuthView", "text!layout/home.html"],
  function($, Backbone, Layout, HelloView, AuthView, HomeLayoutHTML){

    var HomeLayout = Layout.extend({
      el: ".main-layout",
      template: HomeLayoutHTML,
      subviews: {
        ".hello": new HelloView(),
        ".auth": new AuthView()
      }
    });
    return HomeLayout;

  }
);