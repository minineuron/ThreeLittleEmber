ThreeLittleEmber.PanelView = Ember.View.extend({
  layoutName:"panel",
  xPositionChanged:function(){
    console.log('pos has changed');
  }.property('controller.xpos'),
  classNames:['pull-right']
});


ThreeLittleEmber.InspectorView = ThreeLittleEmber.PanelView.extend({
  templateName:"inspector",
  classNames:['pull-left'],
  creer:function(){
    console.log('eraejaze');

  }
});

ThreeLittleEmber.ListView = ThreeLittleEmber.PanelView.extend({
  templateName:"list",
  classNames:['pull-left'],
  creer:function(){
    console.log('eraejaze');

  }
});


ThreeLittleEmber.CameraView = ThreeLittleEmber.PanelView.extend({

});


//
ThreeLittleEmber.PanelsView = Ember.ContainerView.extend({
  childViews:['listPanel','inspectorPanel','cameraPanel'],
  inspectorPanel:ThreeLittleEmber.InspectorView.create(),
  cameraPanel:ThreeLittleEmber.PanelView.create(),
  listPanel:ThreeLittleEmber.ListView.create()
});