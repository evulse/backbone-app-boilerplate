// modelsSpec.js
// -------
define([
  "jquery",
  "backbone",
  "models/AuthModel",
  "helpers/Cookie"
  ], function($, Backbone, AuthModel, Cookie){

  describe("Models", function() {

    describe("Auth Model", function() {

      beforeEach(function() {
        this.model = new AuthModel();
        spyOn(AuthModel.prototype, "fetch").andCallThrough();
      });

      it("should be in a valid state", function() {
        expect(this.model.isValid()).toBe(true);
      });

      it("should fetch cookie when initialized", function() {
        this.model.initialize();
        expect(AuthModel.prototype.fetch).toHaveBeenCalled();
        var json = this.model.toJSON();
        expect($.cookies().read("auth","code")).toEqual(json.code);
      });

    });

  });

});