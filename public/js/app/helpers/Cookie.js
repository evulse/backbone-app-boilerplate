// helpers/Cookie.js
// --------
define(["jquery", "jquery.cookie"],
  function($) {

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
