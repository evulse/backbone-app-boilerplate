// cookieSpec.js
// -------
define(["jquery", "backbone", "helpers/Cookie", "jasminejquery"],
  function($, Backbone,Cookie){

  describe("Cookies", function() {

    beforeEach(function(){
      this.cookie = Cookie;
      this.cookie.destroy("all");
      this.cookie.set_defaults();
    });

    describe("Defaults", function() {
      it("should expires in 3 days, sitewide", function() {
        expect($.cookie.defaults.expires).toEqual(3);
        expect($.cookie.defaults.path).toEqual("/");
      });
      it("should store raw data on JSON format", function(){
        expect($.cookie.raw).toBeTruthy();
        expect($.cookies().verify("auth")).toBeTruthy();
      });
      it("should have default values", function() {
        expect($.cookie().auth).toBeDefined();
      });
    });

    describe("Read & Write", function(){
      it("should be able to demolish traces",function(){
        this.cookie.destroy("all");
        expect($.cookie()).toEqual({"":""});
      });
      it("should write properly", function(){
        expect($.cookies().read("auth","client_id")).toEqual("not_set");
        $.cookies().replace("auth","client_id",true);
        expect($.cookies().read("auth","client_id")).toBeTruthy();
      });
      it("should read properly", function(){
        expect($.cookies().read("auth","client_id")).toEqual("not_set");
      });
    });

  });

  }
);