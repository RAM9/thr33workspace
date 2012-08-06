var camera, scene, renderer, controls,
geometry, material, mesh,mesh1;

init();
animate();

function init() {

  scene      = new THREE.Scene();
  var width  = window.innerWidth;
  var height = window.innerHeight;
  //camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
  

 camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 1, 10000 );
  camera.position.z = 1000;
  camera.position.set( -150, 0, 1000 );
  scene.add( camera );
 // controls = new THREE.FlyControls( camera );

 // controls.movementSpeed = 70;
 // controls.lookSpeed = 0.05;
 // controls.noFly = true;
 // controls.lookVertical = false;
//  geometry = new THREE.CubeGeometry( 200, 200, 200 );
// geometry =  new THREE.OctahedronGeometry( 100, 3 );
 geometry =  new THREE.OctahedronGeometry( 120, 4 );
  material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

  mesh = new THREE.Mesh( geometry, material );
  mesh.position.x = 0;
  mesh.position.y = 0;
  mesh.position.z = 1;
  scene.add( mesh );

  geometry =  new THREE.SphereGeometry( 10, 10,10,1,Math.PI *2,0,Math.PI*2 );
  material = new THREE.MeshBasicMaterial( { color: 0xAAFFAA, wireframe: true } );

  mesh1 = new THREE.Mesh( geometry, material );
  scene.add( mesh1 );

  renderer = new THREE.CanvasRenderer();
  renderer.setClearColor(new THREE.Color( 0xCE90CE ));
  renderer.setSize( window.innerWidth, window.innerHeight );

  document.body.appendChild( renderer.domElement );

}

function animate() {

  // note: three.js includes requestAnimationFrame shim
  requestAnimationFrame( animate );
  render();

}

function render() {

  mesh.rotation.x += 0.009;
  mesh.rotation.y += 0.008;
  mesh1.rotation.x += 0.009;
  mesh1.rotation.y += 0.008;
  //controls.update();
  renderer.render( scene, camera );

}
