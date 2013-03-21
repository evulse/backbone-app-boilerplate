// (function(window) {
//   "use strict";

//   var Backbone = window.Backbone,
//       _        = window._,
//       $        = window.$;

//   var parseHash = function(hash) {
//     var params = {},
//         queryString = hash.substring(1),
//         regex = /([^&=]+)=([^&]*)/g, m;
//     while(m===regex.exec(queryString)){
//       params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
//     }
//     return params;
//   };

//   Backbone.OAuth = Backbone.OAuth || {};
//   Backbone.OAuth = function(options) {
//     _.extend(this, options);
//     _.bind(this.onRedirect, this);
//     window.OAuthRedirect = this.onRedirect;
//   };

//   _.extend(Backbone.OAuth.prototype, {
//     access_token_name: 'access_token',
//     setupAuthUrl: function() {
//       var url = this.auth_url + "?client_id=" + this.client_id + "&redirect_uri=" + this.redirect_url + "&response_type=code";
//       if (this.scope) url += "&scope=" + this.scope;
//       if (this.state) url += "&state=" + this.state;
//       return url;
//     },
//     auth: function() {
//       if (!this.access_token_name) throw new Error("No access token name given.");
//       if (!this.auth_url) throw new Error("No auth url given.");
//       if (!this.redirect_url) throw new Error("No redirect url given.");
//       this.dialog = window.open(this.setupAuthUrl());
//     },
//     onRedirect: function(hash) {
//       var params = parseHash(location.hash);
//       if (this.authSuccess(params)) {
//         this.onSuccess(params);
//       } else {
//         this.onError(params);
//       }
//     },
//     authSuccess: function(params) {
//       return params[this.access_token_name];
//     },
//     onError: function() {},
//     onSuccess: function() {}
//   });

//   Backbone.OAuth.configs = {
//     app: {
//       auth_url: "http://api.carted.com/dialog/authorize"
//     }
//   };

// })(this);