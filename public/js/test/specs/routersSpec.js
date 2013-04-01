// routersSpec.js
// --------------------------
define([
  "jquery",
  "backbone",
  "routers/DesktopRouter",
  "jasminejquery"
  ], function($, Backbone, DesktopRouter) {

  describe("Routers", function() {

    describe("Backbone desktop routers", function () {

      beforeEach(function () {
        Backbone.history.stop();
        this.router = new DesktopRouter();
        this.routeSpy = jasmine.createSpy("js/test");
        this.router.on("route:index", this.routeSpy);
      });

      it("should call the desktop router home method when there is no hash on the url", function() {
        this.router.navigate("elsewhere");
        this.router.navigate("", { trigger: true });
        expect(this.routeSpy).toHaveBeenCalled();
        this.router.navigate("SpecRunner.html");
      });

    });

  });

});