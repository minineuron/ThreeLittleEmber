function animate() {
  requestAnimationFrame(animate );
  // render();
  renderer.render( scene, camera );
  stats.update();
};
ThreeLittleEmber.ThreeView = Ember.View.extend({
  classNames:['full'],
  scene:null,
  camera:null,
  mouse2D:null,
  theta:45 * 0.5,
  scene:null,
  leftClick:false,
  rightClick:false,
  width:0,
  height:0,
  threeInit:false,
  isShiftDown:false,
  isCtrlDown:false,
  animate:function(){
    // debugger;
    var newcontent = this.get('controller.newcontent');
    newcontent.forEach(function(item,idx){
      scene.add(item.threeObject);
      console.log(idx);
    })
    // animate();
    this.set('controller.newcontent',[]);
  },
  contentBinding: 'controller.content',
  vDidChanged:function(){
    console.log('dicDchanged');
    // debugger;
    if (this.get('threeInit')){
      var content = this.get('controller.content');
      content.forEach(function(item,idx){
        scene.add(item.threeObject);
      });
      // animate();
      // this.set('controller.newcontent',[]);
    }
  }.observes('controller.content.@each'),
  didInsertElement:function(){
    console.log('init thrreview')
    this.set('threeInit',true);
    // debugger;
      // set the scene size
  var WIDTH = this.$().width(),
      HEIGHT = this.$().height();

  // set some camera attributes
  var VIEW_ANGLE = 45,
      ASPECT = WIDTH / HEIGHT,
      NEAR = 0.1,
      FAR = 10000;

  // get the DOM element to attach to
  // - assume we've got jQuery to hand
  // var $container = $('#container');
var $container = this.$();

  // create a WebGL renderer, camera
  // and a scene
  renderer = new THREE.WebGLRenderer();
  camera = new THREE.PerspectiveCamera(  VIEW_ANGLE,
                                  ASPECT,
                                  NEAR,
                                  FAR  );
  scene = new THREE.Scene();
  this.set('scene',scene);
  // the camera starts at 0,0,0 so pull it back
  camera.position.y = 800;
  this.set('camera',camera);
  // start the renderer
  renderer.setSize(WIDTH, HEIGHT);

  // attach the render-supplied DOM element
  $container.append(renderer.domElement);

  // // create the sphere's material
  // var sphereMaterial = new THREE.MeshLambertMaterial(
  // {
  //     color: 0xCC0000
  // });

  // // set up the sphere vars
  // var radius = 50, segments = 16, rings = 16;

  // // create a new mesh with sphere geometry -
  // // we will cover the sphereMaterial next!
  // var sphere = new THREE.Mesh(
  //    new THREE.SphereGeometry(radius, segments, rings),
  //    sphereMaterial);
  var content = this.get('controller.content');
  content.forEach(function(item,idx){
    scene.add(item.threeObject);
    // debugger;
  })
  // add the sphere to the scene

  // camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
  //       camera.position.y = 800;
  // and the camera
  scene.add(camera);


  var mouse2D = new THREE.Vector3( 0, 10000, 0.5 );
  this.set('mouse2D',mouse2D);
  // create a point light
  var pointLight = new THREE.PointLight( 0xFFFFFF );

  // set its position
  pointLight.position.x = 10;
  pointLight.position.y = 50;
  pointLight.position.z = 130;

  // add to the scene
  scene.add(pointLight);
  plane = new THREE.Mesh( new THREE.PlaneGeometry( 1000, 1000, 20, 20 ), new THREE.MeshBasicMaterial( { color: 0x555555, wireframe: true } ) );
  plane.rotation.x = - Math.PI / 2;
  scene.add( plane );
  // draw!
  stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );
  renderer.render(scene, camera);

  // debugger;
  animate();

  },
  mouseMove:function(evt){
    var mouse2D = this.get('mouse2D');
    mouse2D.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse2D.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    var theta = this.get('theta');
    theta += mouse2D.x * 1.5;
    // debugger;
    // console.log(theta);
    this.set('mouse2D',mouse2D);
    this.set('theta',theta);
    // var theta = 12;

    // console.log(this.get('leftClic'),this.get('rightClic'))
    if (this.get('leftClic')===true || this.get('rightClic')===true){
      if (this.get('leftClic')===true){
        this.get('camera').position.z = 1400 * Math.cos( THREE.Math.degToRad( theta ) );
        this.get('camera').position.x = 1400 * Math.sin( THREE.Math.degToRad( theta ) );
      }else{
        this.get('camera').position.y = 1400 * Math.cos( THREE.Math.degToRad( theta ) );
        this.get('camera').position.z = 1400 * Math.sin( THREE.Math.degToRad( theta ) );
      }


      var scene = this.get('scene');
      this.get('camera').lookAt( scene.position );
    }
    // console.log(theta);
  },
  mouseDown:function(){
    var rightclick;
    if (!e) var e = window.event;
    if (e.which) rightclick = (e.which == 3);
    else if (e.button) rightclick = (e.button == 2);
    if (rightclick)
       this.set('rightClic',true);
    else
      this.set('leftClic',true);

  },
  mouseUp:function(){
    var rightclick;
    if (!e) var e = window.event;
    if (e.which) rightclick = (e.which == 3);
    else if (e.button) rightclick = (e.button == 2);
    if (rightclick)
       this.set('rightClic',false);
    else
      this.set('leftClic',false);
  },
  // contextMenu:function(evt){
  //   // console.log('rightclic')
  //   this.set('rightClic',true);
  //   evt.preventDefault();

  // },
  keyDown:function( event ) {
    console.log(event)
    switch( event.keyCode ) {
      case 16: this.set('isShiftDown',true); break;
      case 17: this.set('isCtrlDown',true); break;
    }
  },
  keyUp:function( event ) {
    switch ( event.keyCode ) {
      case 16: this.set('isShiftDown',false); break;
      case 17: this.set('isCtrlDown',false); break;
    }
  }
});