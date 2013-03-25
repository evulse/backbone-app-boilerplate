// authSpec.js
// -------
define(["jquery", "backbone", "views/Auth", "models/Auth", "text!templates/Auth/guest.html", "jasminejquery"],
  function($, Backbone, AuthView, AuthModel, guest){

  describe("Auth", function() {

    describe("Auth Views", function() {
      beforeEach(function(){
        this.auth = new AuthView();
        this.auth.model = new AuthModel();
      });
      it("should contain the correct view element", function() {
        expect(this.auth.$el.selector).toEqual(".auth");
      });
      it("should contain the appropriate template", function() {
        expect(this.auth.template).toEqual(_.template(guest, this.auth.model.toJSON()));
      });
    });

  });

  }
);