import * as THREE from 'https://unpkg.com/three@0.128.0/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://unpkg.com/three@0.128.0/examples/jsm/controls/OrbitControls.js';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('three-model-container');
    const loadingSpinner = document.getElementById('loading-spinner');
    if (!container) {
        console.error('THREE.js container not found.');
        return;
    }

    // Set model path
    const modelPath = './models/le_pont_du_gard.glb'; // Ensure this matches your file exactly!

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0); // Light grey background

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 10, 10); // Initial camera position (will be adjusted by fitCameraToObject)

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // OrbitControls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // An animation loop is required when damping is enabled
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false; // Prevents panning beyond limits
    controls.minDistance = 1;
    controls.maxDistance = 500; // Adjust max zoom out distance
    controls.enableZoom = true;
    controls.enableRotate = true;

    // Lighting (Basic ambient light)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Soft white light
    scene.add(ambientLight);

    // GLTF Loader
    const loader = new GLTFLoader();

    loader.load(
        modelPath,
        function (gltf) {
            const model = gltf.scene;
            scene.add(model);
            loadingSpinner.style.display = 'none'; // Hide spinner on load

            // Fit camera to the loaded object
            fitCameraToObject(camera, model, controls);

            // Optional: Log model bounding box to debug scale/position
            const bbox = new THREE.Box3().setFromObject(model);
            console.log('Model Bounding Box:', bbox);
            console.log('Model size:', bbox.getSize(new THREE.Vector3()));
            console.log('Model center:', bbox.getCenter(new THREE.Vector3()));
        },
        function (xhr) {
            // console.log((xhr.loaded / xhr.total * 100) + '% loaded'); // Progress indicator (optional)
        },
        function (error) {
            console.error('An error occurred loading the model:', error);
            loadingSpinner.style.display = 'none'; // Hide spinner on error
            // Display an error message to the user
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Failed to load 3D model. Please try again later or check the model file.';
            errorMessage.style.color = 'red';
            errorMessage.style.textAlign = 'center';
            container.appendChild(errorMessage);
        }
    );

    // Helper function to fit camera to object
    function fitCameraToObject(camera, object, controls, offset = 1.25) {
        const boundingBox = new THREE.Box3().setFromObject(object);
        const center = boundingBox.getCenter(new THREE.Vector3());
        const size = boundingBox.getSize(new THREE.Vector3());

        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = camera.fov * (Math.PI / 180);
        let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));

        cameraZ *= offset; // Apply offset to distance

        camera.position.set(center.x, center.y, center.z + cameraZ);
        camera.lookAt(center);

        if (controls) {
            controls.target.copy(center);
            controls.update();
        }
    }

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        controls.update(); // only required if controls.enableDamping or controls.autoRotate are set to true
        renderer.render(scene, camera);
    }
    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
});