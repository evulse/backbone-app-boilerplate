// views/Auth.js
// --------
define(["jquery", "backbone", "models/AuthModel", "text!templates/Auth/session.html", "app/config/Common"],
  function($, Backbone, Auth, AuthSessionHTML,Common) {

    var AuthModel = new Auth();

    var AuthView = Backbone.View.extend({
      el: ".main-layout",
      config: {
        access_token_name: "access_token",
        response_type: "code",
        authorize_url: "dialog/authorize",
        authorize_redirect_uri: window.location.protocol + "//" + window.location.host + "/connect",
        token_auth_url: "oauth/token",
        token_redirect_uri: window.location.protocol + "//" + window.location.host + "/connect"
      },
      start: function(params) {
        var that = this;
        if (typeof(params) !== "undefined") {
          AuthModel.save(params);
          AuthModel.fetch();
          that.start();
        } else {
          AuthModel.fetch();
          if (AuthModel.get("code") == "undefined") {
            that.getCode();
          } else if (AuthModel.get("access_token") == "undefined"){
            that.getToken();
          } else {
            that.testSay();
          }
        }
      },
      getCode: function() {
        var that = this;
        var c = that.config;
        window.location.href = Common.api_base + c.authorize_url + "?client_id=" + Common.client_id + "&response_type=" + c.response_type + "&redirect_uri=" + encodeURIComponent(c.authorize_redirect_uri);
      },
      getToken: function() {
        this.render();
        var that = this, c = that.config;
        $.ajax({
          type: "POST",
          url: Common.api_base + c.token_auth_url,
          data: {
            client_id: Common.client_id,
            client_secret: Common.client_secret,
            grant_type: "authorization_code",
            code: AuthModel.get("code"),
            redirect_uri: c.token_redirect_uri
          },
          beforeSend: function(){
            that.$el.append("<p>Sending POST request</p>");
          },
          success: function(data) {
            that.$el.find(".status").remove();
            that.start(data);
          },
          error: function(data) {
            that.$el.find(".status").remove();
            console.log(data);
          }
        });
      },
      testSay: function() {
        var that = this;
        that.render();
        $.ajax({
          url: Common.api_base + "say/Mike.json?access_token="+AuthModel.get("access_token"),
          success: function(data) {
            console.log(data);
            that.$el.find(".mike").text("Hello, "+ data.name);
            that.$el.append("<p>This window will close in 3 seconds...</p>");
            setTimeout(function(){
              window.close();
            },3000);
          },
          error: function(data) {
            console.log(data);
          }
        });
      },
      render: function() {
        this.$el.html(_.template(AuthSessionHTML,AuthModel.toJSON()));
        return this;
      }
    });

    return AuthView;

  }
);