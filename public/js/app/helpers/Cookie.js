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
      set_defaults: function(){
        if(!$.cookie().hasOwnProperty("auth")){
          this.destroy("auth");
          $.cookies().create("auth", {
            "client_id": "not_set",
            "code": "not_set",
            "client_secret": "not_set"
          });
        }
      },
      destroy: function(parts){
        if(parts == "all"){
          for(var key in $.cookie()){$.removeCookie(key);}
        } else {
          $.removeCookie(parts);
        }
      }
    };

    return cookie;

  }
);
