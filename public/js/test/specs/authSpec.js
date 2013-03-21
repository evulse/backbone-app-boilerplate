// View.js
// -------
define(["jquery", "backbone", "views/Auth", "text!templates/Auth/guest.html", "jasminejquery"],
  function($, Backbone, Auth, guest){

  describe("Auth", function() {

    describe("Auth Views", function() {
      beforeEach(function(){
        this.auth = new Auth();
      });
      it("should contain the correct view element", function() {
        expect(this.auth.$el.selector).toEqual(".auth");
      });
      it("should contain the appropriate template", function() {
        expect(this.auth.template).toEqual(guest);
      });
    });

  });

  }
);