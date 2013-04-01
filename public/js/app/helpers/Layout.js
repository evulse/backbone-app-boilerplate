// Layout.js
// -------
define(["jquery", "backbone"],
  function($, Backbone){

    var Layout = Backbone.View.extend({
      initialize: function(){
        this.render();
      },
      render: function() {
        this.$el.html(this.template);
        _.forIn(this.subviews,function(view,element){
          view.parent = this;
          view.setElement(this.$(element)).render();
        });
      }
    });

    return Layout;

  }
);