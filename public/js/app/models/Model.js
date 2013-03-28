/**
 * This is an example of a Model
 * @class Model
 * @extends Backbone.Model
 * @constructor
 * @return {Class} Model
 */
define(["jquery", "backbone"],
  function($, Backbone) {
    var Model = Backbone.Model.extend({
      // Model Constructor
      initialize: function() {

      },
      // Default values for all of the Model attributes
      defaults: {

      },
      // Gets called automatically by Backbone when the set and/or save methods are called (Add your own logic)
      validate: function(attrs) {

      }
    });

    // Returns the Model class
    return Model;
  }
);
