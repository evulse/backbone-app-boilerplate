// helpersSpec.js
// -------
define([
  "jquery",
  "backbone",
  "helpers/Cookie",
  "helpers/Validator",
  "helpers/Layout"
  ], function($, Backbone, Cookie, Validator, Layout) {

  describe("Helpers", function() {

    describe("Cookies", function() {

      beforeEach(function(){
        this.cookie = Cookie;
        this.cookie.destroy("all");
        this.cookie.set_defaults();
      });

      it("should expires in 3 days, sitewide", function() {
        expect($.cookie.defaults.expires).toEqual(3);
        expect($.cookie.defaults.path).toEqual("/");
      });

      it("should store data on JSON format", function(){
        expect($.cookies().verify("auth")).toBeTruthy();
      });

      it("should have default values", function() {
        expect($.cookie().auth).toBeDefined();
      });

      it("should be able to demolish traces",function() {
        this.cookie.destroy("all");
        expect($.cookie()).toEqual({"":""});
      });

      it("should read and write properly", function() {
        expect($.cookies().read("auth","code")).toEqual("undefined");
        $.cookies().replace("auth","code",true);
        expect($.cookies().read("auth","code")).toBeTruthy();
      });

    });

    describe("Validator", function() {

      beforeEach(function() {
        this.model = Backbone.Model.extend({
          validate: function(attrs) {
            var errors = this.errors = {};
            if(!Validator.isEmail(attrs.email)) errors.email = "email is not valid";
            if (!_.isEmpty(errors)) { return errors; }
          }
        });
        this.view = Backbone.View.extend({
          initialize: function() {
            this.model.validate(this.model.toJSON());
          }
        });
      });

      it("should be able to validate with patterns and rules", function() {
        var a1 = new this.model({
          "email": "test2email.com" // invalid value
        });
        var a2 = new this.view({model:a1});
        expect(a1.errors.email).toEqual("email is not valid");
        var b1 = new this.model({
          "email": "test@email.com" // valid value
        });
        var b2 = new this.view({model:b1});
        expect(b1.errors.email).toBeUndefined();
      });

    });

    describe("Layout",function() {

      it("should render subviews on initialize", function() {
        var view = Backbone.View.extend({
          render: function() {
            this.$el.html("Testing!");
          }
        });
        var layout = Layout.extend({
          el:".sandbox",
          template: "<h1>Hello!</h1><p></p>",
          subviews: {
            "p": new view()
          }
        });
        new layout();
        expect($(".sandbox p").text()).toEqual("Testing!");
        $(".sandbox").html("");
      });

    });

  });


});