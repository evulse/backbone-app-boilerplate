// views/Auth.js
// --------
define(["jquery", "backbone", "models/Auth", "helpers/Cookie", "text!templates/Auth/guest.html"],
  function($, Backbone, Model, Cookie, guest) {

    var AuthModel = new Model();

    var AuthView = Backbone.View.extend({
      el: ".auth",
      events: {
        "click .get-code": "getCode",
        "click .get-token": "getToken"
      },
      configs: {
        access_token_name: "access_token",
        get_code : {
          auth_url: "http://api.carted.com/dialog/authorize",
          redirect_url: window.location.protocol + "//" + window.location.host + "/redirect",
          response_type: "code"
        },
        get_token : {
          auth_url: "http://api.carted.com/oauth/token",
          redirect_url: window.location.protocol + "//" + window.location.host + "/redirect",
          grant_type: "authorization_code",
          code: AuthModel.get("code"),
          //client_secret: AuthModel.get("client_secret")
          client_secret: "8638be31-2f91-479d-924a-3742feb17443"
        },
        test: {
          client_id: "c67f0160-7aad-4aa5-8a88-92bbd6f02a4c"
        }
      },
      setupAuthUrl: function(options) {
        var url = this.configs[options].auth_url;
        //url += "?client_id=" + AuthModel.get("client_id");
        url += "?client_id=" + this.configs.test.client_id;
        url += "&redirect_uri=" + this.configs[options].redirect_url;
        if (this.configs[options].client_secret) url += "&client_secret=" + this.configs[options].client_secret;
        if (this.configs[options].response_type) url += "&response_type=" + this.configs[options].response_type;
        if (this.configs[options].code) url += "&code=" + this.configs[options].code;
        if (this.configs[options].grant_type) url += "&grant_type=" + this.configs[options].grant_type;
        if (this.configs[options].scope) url += "&scope=" + this.configs[options].scope;
        if (this.configs[options].state) url += "&state=" + this.configs[options].state;
        return url;
      },
      auth: function(options) {
        if (!this.configs.access_token_name) throw new Error("No access token name given.");
        if (!this.configs[options].auth_url) throw new Error("No auth url given.");
        if (!this.configs[options].redirect_url) throw new Error("No redirect url given.");
        this.dialog = window.open(this.setupAuthUrl(options),"_blank","width=400,height=500");
      },
      getCode: function(e){
        e.preventDefault();
        this.auth("get_code");
      },
      getToken: function(e){
        e.preventDefault();
        this.auth("get_token");
      },
      initialize: function() {
        this.render();
      },
      render: function() {
        this.template = _.template(guest, AuthModel.toJSON());
        this.$el.html(this.template);
        return this;
      }
    });

    return AuthView;
  }
);