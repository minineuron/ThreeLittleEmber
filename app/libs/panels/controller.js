ThreeLittleEmber.PanelController = Ember.Controller.extend({
  xpos:0,
  ypos:0,
  creer:function(){
    console.log('new object');
  }
});

ThreeLittleEmber.InspectorController = Ember.Controller.extend({
  creer:function(){
    console.log('new object');
  }
});

ThreeLittleEmber.ListController = Ember.Controller.extend({
  needs:['three']
});


//

ThreeLittleEmber.PanelsController = Ember.ArrayController.extend({
  needs:['inspector','list','three'],
  inspect:function(obj){
    this.get('controllers.inspector').set('content',obj);
  }
});
