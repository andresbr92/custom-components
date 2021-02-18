import * as THREE from "https://unpkg.com/three/build/three.module.js";
import { GLTFLoader } from "https://unpkg.com/three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://unpkg.com/three/examples/jsm/controls/OrbitControls.js";

//Elements
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({ alpha: true });
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector3();
let objects = [];

//Set camera
camera.position.set(0, 20, 100);

//Set renderer
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
document.getElementById("render").appendChild(renderer.domElement);

//Ambient light
const light = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
scene.add(light);

//Orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

//Load city
const loader = new GLTFLoader();
loader.load(
  "city.gltf",
  function (gltf) {
    scene.add(gltf.scene);
    objects.push(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

//test cube
const geometry = new THREE.BoxGeometry(10, 10, 10);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
cube.position.x = 30;
objects.push(cube);
// Mouse control
function onMouseDown(event) {
  var mouse3D = new THREE.Vector3(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1,
    0.5
  );
  var raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse3D, camera);
  var intersects = raycaster.intersectObjects(objects, true);
  if (intersects.length > 0) {
    intersects[0].object.material.color.setHex(Math.random() * 0xffffff);
  }
}

// move cube
function moveCube() {
  let x = cube.position.x;
  let z = cube.position.z;
  if (x == 30) {
    z += 1;
    if (z == 30) x -= 1;
  } else if (z == 30) {
    x -= 1;
    if (x == -30) z -= 1;
  } else if (x == -30) {
    z -= 1;
    if (z == -30) x += 1;
  } else if (z == -30) {
    x += 1;
    if (x == 30) z += 1;
  }
  cube.position.x = x;
  cube.position.z = z;
}

// Animation
function animate() {
  requestAnimationFrame(animate);
  //update controls
  //controls.update();
  moveCube();
  renderer.render(scene, camera);
}
animate();

//listener
document.addEventListener("pointerup", onMouseDown, true);
