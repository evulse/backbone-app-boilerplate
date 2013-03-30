// helpers/Cookie.js
// --------
define(["jquery", "backbone", "jquery.cookie"],
  function($, Backbone) {

    $.cookie.defaults = {
      path: "/",
      expires: 3
    };

    var cookie = {
      set_defaults: function(){
        if(!$.cookie().hasOwnProperty("auth")){
          this.destroy("auth");
          $.cookies().create("auth", {
            "code": "undefined",
            "access_token": "undefined"
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
