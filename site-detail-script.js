import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('three-canvas');
    const loadingOverlay = document.getElementById('loading-overlay');
    const loadingPercentage = document.getElementById('loading-percentage');

    if (!canvas) {
        console.warn('3D canvas not found. Is this the site-detail page?');
        return; // Exit if not on the correct page
    }

    // --- Core Scene Setup ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xefefef); // Light grey background for the 3D view

    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.set(0, 50, 100); // Adjust camera position for Le Pont du Gard

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputColorSpace = THREE.SRGBColorSpace; // Correct color space for realistic rendering

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(50, 150, 50).normalize();
    scene.add(directionalLight);

    // Add another light for better illumination
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight2.position.set(-50, -50, -50).normalize();
    scene.add(directionalLight2);


    // --- Load GLTF Model (Le Pont du Gard) ---
    const loader = new GLTFLoader();
    // !!! IMPORTANT: Update this path and filename to your actual model file !!!
    const modelPath = './models/le_pont_du_gard.glb'; // Use .glb for better performance and compatibility

    loader.load(
        modelPath,
        function (gltf) {
            scene.add(gltf.scene);
            console.log('Le Pont du Gard model loaded successfully:', gltf.scene);

            // Hide loading overlay
            if (loadingOverlay) {
                loadingOverlay.style.display = 'none';
            }

            // Optional: Adjust model scale or position if needed
            // gltf.scene.scale.set(0.1, 0.1, 0.1);
            // gltf.scene.position.set(0, 0, 0);

            // Optional: Automatically center and frame the model
            const box = new THREE.Box3().setFromObject(gltf.scene);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());

            // Adjust camera position based on model size for better initial view
            const maxDim = Math.max(size.x, size.y, size.z);
            const fov = camera.fov * (Math.PI / 180);
            let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
            cameraZ *= 1.5; // Add some padding
            camera.position.set(center.x, center.y + size.y * 0.2, center.z + cameraZ); // Raise Y slightly
            camera.lookAt(center);
            controls.target.copy(center); // Set orbit controls target to model's center
            controls.update();
        },
        // Progress callback
        function (xhr) {
            if (loadingPercentage) {
                const percentage = Math.round(xhr.loaded / xhr.total * 100);
                loadingPercentage.textContent = `${percentage}%`;
            }
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        // Error callback
        function (error) {
            console.error('An error occurred loading the model:', error);
            if (loadingOverlay) {
                loadingOverlay.textContent = 'Error loading model.';
            }
        }
    );

    // --- User Interaction Controls ---
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = true; // Allow panning with mouse/touch
    controls.maxPolarAngle = Math.PI * 0.9; // Allow looking slightly below the model horizon
    controls.minDistance = 1; // Minimum zoom level
    controls.maxDistance = 500; // Maximum zoom level

    // --- Animation Loop ---
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }
    animate();

    // --- Handle Window Resizing ---
    window.addEventListener('resize', () => {
        const newWidth = canvas.clientWidth;
        const newHeight = canvas.clientHeight;

        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
    });
});