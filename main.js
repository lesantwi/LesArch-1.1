import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// 1. Scene Setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xabcdef); // A light blue background

// 2. Camera Setup
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 50, 100); // Adjust camera position to see the model

// 3. Renderer Setup
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-canvas'), antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// 4. Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7); // Soft ambient light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); // Stronger directional light
directionalLight.position.set(100, 100, 50);
scene.add(directionalLight);

// 5. Load GLTF Model (Le Pont du Gard)
const loader = new GLTFLoader();
const modelPath = './models/le_pont_du_gard.gltf'; // IMPORTANT: Replace with your actual model file name

loader.load(
    modelPath,
    function (gltf) {
        // Add the loaded model to the scene
        scene.add(gltf.scene);
        console.log('Model loaded successfully:', gltf.scene);

        // Optional: Fit camera to model if needed (more advanced)
        // const box = new THREE.Box3().setFromObject(gltf.scene);
        // const center = box.getCenter(new THREE.Vector3());
        // const size = box.getSize(new THREE.Vector3());
        // const maxDim = Math.max(size.x, size.y, size.z);
        // const fov = camera.fov * (Math.PI / 180);
        // let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
        // cameraZ *= 1.5; // Add some padding
        // camera.position.set(center.x, center.y + size.y / 4, center.z + cameraZ);
        // camera.lookAt(center);
    },
    function (xhr) {
        // Progress callback (optional)
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        // Error callback
        console.error('An error occurred loading the model:', error);
    }
);

// 6. Orbit Controls (for user interaction)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Smooth camera movement
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false; // Prevents panning beyond limits
controls.maxPolarAngle = Math.PI / 2; // Limit vertical rotation

// 7. Animation Loop
function animate() {
    requestAnimationFrame(animate);

    controls.update(); // Update controls in each frame

    renderer.render(scene, camera);
}
animate();

// 8. Handle Window Resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
});