// View.js
// -------
define(["jquery", "backbone", "helpers/Cookie", "jasminejquery"],
  function($, Backbone,Cookie){

  describe("Cookie", function() {

    beforeEach(function(){
      this.cookie = Cookie;
      this.cookie.destroy();
      this.cookie.setDefaults();
    });

    describe("Defaults", function() {
      it("should expires in 3 days, sitewide", function() {
        expect($.cookie.defaults.expires).toEqual(3);
        expect($.cookie.defaults.path).toEqual("/");
      });
      it("should have default values", function() {
        expect($.cookie("logged_in")).toBeDefined();
      });
    });

    describe("Read & Write", function(){
      it("should be able to demolish traces",function(){
        this.cookie.destroy();
        expect($.cookie()).toEqual({"":""});
      });
      it("should not write without proper key and value", function(){
        this.cookie.set("random_key_123","proper value");
        expect($.cookie("random_key_123")).toBeUndefined();
        this.cookie.set("logged_in");
        expect($.cookie("logged_in")).toEqual("no");
        this.cookie.set("logged_in","proper value");
        expect($.cookie("logged_in")).toEqual("proper value");
      });
      it("should read prorerly", function(){
        expect(this.cookie.read("logged_in")).toEqual("no");
      });
    });

  });

  }
);