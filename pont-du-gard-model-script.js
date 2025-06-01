document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('three-model-container');
    const loadingSpinner = document.getElementById('loading-spinner');

    if (!container) {
        console.error('Three.js container not found!');
        return;
    }

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0); // Light gray background

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 5, 10); // Adjust camera position for better initial view

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio); // For sharper rendering on high-DPI screens
    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7); // Soft white light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7); // Position of the light source
    directionalLight.castShadow = true; // Enable shadows (requires renderer.shadowMap.enabled = true)
    scene.add(directionalLight);

    // Optional: Add a helper to visualize the light
    // const lightHelper = new THREE.DirectionalLightHelper(directionalLight, 2);
    // scene.add(lightHelper);

    // 5. OrbitControls (User Interaction)
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Smooth camera movement
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false; // Prevents panning beyond a certain point
    controls.minDistance = 1; // Minimum zoom distance
    controls.maxDistance = 50; // Maximum zoom distance
    controls.target.set(0, 2, 0); // Point the camera looks at (adjust if model center is different)
    controls.update();

    // 6. GLTFLoader to load your 3D model
    const loader = new THREE.GLTFLoader();

    // CORRECTED PATH AND FILENAME:
    const modelPath = 'models/le_pont_du_gard.glb'; 

    loader.load(
        modelPath,
        (gltf) => {
            // Model loaded successfully
            const model = gltf.scene;

            // Calculate bounding box to center the model and adjust camera
            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());

            // Center the model in the scene
            model.position.sub(center);
            model.position.y += size.y / 2; // Adjust position to place base on Y=0

            // Adjust camera position based on model size
            const maxDim = Math.max(size.x, size.y, size.z);
            const fov = camera.fov * (Math.PI / 180);
            let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)); // Distance to see whole model
            cameraZ *= 1.5; // Add some extra space for better viewing
            camera.position.set(center.x, center.y + size.y / 2, cameraZ);
            controls.target.set(center.x, center.y + size.y / 2, center.z);
            controls.update();


            scene.add(model);
            loadingSpinner.style.display = 'none'; // Hide spinner once model is loaded
            console.log('3D model loaded successfully:', modelPath);
        },
        (xhr) => {
            // Optional: Progress updates
            const progress = (xhr.loaded / xhr.total) * 100;
            console.log(`Loading model: ${progress.toFixed(2)}% loaded`);
            // You could update a progress bar here
        },
        (error) => {
            // Error handling
            console.error('An error occurred while loading the 3D model:', error);
            loadingSpinner.style.display = 'none'; // Hide spinner on error
            container.innerHTML = '<p style="color: red; text-align: center;">Failed to load 3D model. Please try again later.</p>';
        }
    );

    // 7. Handle window resizing
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });

    // 8. Animation loop
    function animate() {
        requestAnimationFrame(animate);
        controls.update(); // Only required if controls.enableDamping or controls.autoRotate are set to true
        renderer.render(scene, camera);
    }
    animate();
});