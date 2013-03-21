// helpers/Cookie.js
// --------
define(["jquery", "backbone", "jquery.cookie"],
  function($, Backbone) {

    $.cookie.defaults = {
      path: "/",
      expires: 3
    };
    $.cookie.raw = true;

    var cookie = {
      "defaults": {
        "logged_in": "no",
        "client_id": null,
        "code": null,
        "client_secret": null
      },
      set: function(key,value){
        var defaultkeys = [];
        for(var defaultkey in this.defaults){ defaultkeys.push(defaultkey);}
        if(_.indexOf(defaultkeys,key) !== -1 && (typeof(value) != "undefined" || value !== null)){
          $.cookie(key,value);
        }
      },
      read: function(key){
        return($.cookie(key));
      },
      destroy: function(){
        for(var key in $.cookie()){$.removeCookie(key);}
      },
      setDefaults: function(){
        for(var key in this.defaults){
          if(typeof($.cookie(key)) === "undefined" || $.cookie(key) === null) {
            $.cookie(key, cookie.defaults[key]);
          }
        }
      }
    };

    return cookie;

  }
);
