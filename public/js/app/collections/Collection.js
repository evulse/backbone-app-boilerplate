/**
 * This is an example of a Collection
 * @class Collection
 * @extends Backbone.Collection
 * @uses Model
 * @constructor
 * @param model {Class} Model to populate
 */
define(["jquery","backbone","models/Model"],
  function($, Backbone, Model) {

    var Collection = Backbone.Collection.extend({
      /**
       * @property model
       * @type Class
       */
      model: Model
    });

    return Collection;

  }
);