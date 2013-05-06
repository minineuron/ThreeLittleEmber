ThreeLittleEmber.IndexRoute = Ember.Route.extend({
  setupController: function (controller) {
    controller.set("content", ThreeLittleEmber.IndexModel.find());
  }
});

