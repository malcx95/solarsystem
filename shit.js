var scene = new THREE.Scene();
var camera = 
new THREE.PerspectiveCamera(
		75, window.innerWidth / window.innerHeight,
		0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); 
var geometry = new THREE.BoxGeometry( 2, 2, 2 );
var material = new THREE.MeshPhongMaterial({ color: 0xff3300, specular: 0x555555, shininess: 30 });
var cube = new THREE.Mesh( geometry, material );
scene.add(cube);

var wall1 = new THREE.Shape();
rect.moveTo(-5,-5);
rect.lineTo(-5,5);
rect.lineTo(5,5);
rect.lineTo(5,-5);
rect.lineTo(-5,-5);

var rectGeom = new THREE.ShapeGeometry(rect);
var rectMesh = new THREE.Mesh( rectGeom, new THREE.MeshPhongMaterial( { color: 0xff0000, specular: 0x555555, shininess: 30  } ) ) ;
scene.add(rectMesh);

camera.position.z = 10;
var it = 0;
var b = true;
var light = new THREE.PointLight( 0x404040, 10, 100 );
var light2 = new THREE.AmbientLight( 0xffffff );
light.position.set( 5, 5, 5 );
scene.add( light );
scene.add(light2);
function render() {
	requestAnimationFrame(render);
	cube.rotation.x += 0.02;
	cube.rotation.y += 0.1;
	cube.position.z += Math.sin(it/20) / 10;
	cube.position.y += Math.sin(it/10) / 10;
	cube.position.x += Math.sin(it/10) / 10;
//	rectMesh.rotation.x += Math.sin(it/20) / 15;
//	rectMesh.rotation.y += Math.sin(it/15) / 15;
//	rectMesh.rotation.z += Math.sin(it/10) / 15;
	//camera.rotation.x += Math.sin(it/20) / 1 100;
	renderer.render(scene, camera);
	it++;
}

render();
