ThreeLittleEmber.ThreeObjectModel = Ember.Object.extend({
  material:null,
  threeObject:null,
  x:0,
  y:0,
  z:0,
  createSphere:function(){
    // set up the sphere vars
    var radius = 50, segments = 16, rings = 16;

    // create a new mesh with sphere geometry -
    // we will cover the sphereMaterial next!
    var sphere = new THREE.Mesh(
       new THREE.SphereGeometry(radius, segments, rings),
       sphereMaterial);
    return sphere;
  },
  updateThreeObject:function(){
    this.get('threeObject').position.x = this.get('x');
    this.get('threeObject').position.y = this.get('y');
    this.get('threeObject').position.z = this.get('z');

  }.observes('x','y','z')
});



ThreeLittleEmber.ThreeController = Ember.ArrayController.extend({
  // content:Ember.A(),
  //   ThreeLittleEmber.ThreeObjectModel.create({
  //     material:new THREE.MeshLambertMaterial({color: 0xCC00DD}),
  //     name:'objectA',
  //     threeObject:function(){
  //       // set up the sphere vars
  //       var radius = 50, segments = 16, rings = 16;

  //       // create a new mesh with sphere geometry -
  //       // we will cover the sphereMaterial next!
  //       var sphere = new THREE.Mesh(
  //          new THREE.SphereGeometry(radius, segments, rings),
  //          new THREE.MeshLambertMaterial({color: 0xCC00DD}));
  //       sphere.position.x=45;
  //       return sphere;
  //     }()
  //   })
  // ),
  newcontent:Ember.A(),
  pushObject:function(obj){
    console.log('add obj');
    this.get('newcontent').pushObject(obj);
    this._super(obj);


  }
});

