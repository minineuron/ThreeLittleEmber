ThreeLittleEmber.Router.map(function() {
});


ThreeLittleEmber.ApplicationRoute = Ember.Route.extend({
  i:0,
  events: {
    creerSphere:function(){
      var threeC = this.controllerFor('three');
      threeC.addObject(
        ThreeLittleEmber.ThreeObjectModel.create({
          material:new THREE.MeshLambertMaterial({color: 0xCC0000}),
          name:'sphere'+this.get('i').toString(),
          threeObject:function(){
            // set up the sphere vars
            var radius = 50, segments = 16, rings = 16;

            // create a new mesh with sphere geometry -
            // we will cover the sphereMaterial next!
            var sphere = new THREE.Mesh(
               new THREE.SphereGeometry(radius, segments, rings),
               new THREE.MeshLambertMaterial({color: 0xCC0000}));
            sphere.position.x=0;
            sphere.position.y=0;
            sphere.position.z=0;
            return sphere;
          }()
        })

      );
      this.incrementProperty('i');
    },
    creerCube:function(){
      var threeC = this.controllerFor('three');
      threeC.addObject(
        ThreeLittleEmber.ThreeObjectModel.create({
          material:new THREE.MeshLambertMaterial({color: 0xCC0000}),
          name:'cube'+this.get('i').toString(),
          threeObject:function(){
            // set up the sphere vars
            var radius = 50, segments = 16, rings = 16;

            cube = new THREE.Mesh( new THREE.CubeGeometry( 200, 200, 200 ), new THREE.MeshNormalMaterial() );
            cube.position.y = 150;
            return cube;
          }()
        })

      );
      this.incrementProperty('i');
    }
  }
});