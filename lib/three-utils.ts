import * as THREE from 'three'; // Importing Three.js library

// Function to create a scene
export const createScene = (): THREE.Scene => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // White background
    return scene;
};

// Function to create a camera
export const createCamera = (width: number, height: number): THREE.PerspectiveCamera => {
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5; // Positioning the camera
    return camera;
};

// Function to create a renderer
export const createRenderer = (width: number, height: number): THREE.WebGLRenderer => {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height); // Setting the size of the renderer
    return renderer;
};

// Function to create a light
export const createLight = (): THREE.AmbientLight => {
    const light = new THREE.AmbientLight(0xffffff, 1); // White ambient light
    return light;
};

// Function to create a simple cube
export const createCube = (): THREE.Mesh => {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0xff69b4 }); // Pink color
    const cube = new THREE.Mesh(geometry, material);
    return cube;
};

// Default export for utility functions
export default {
    createScene,
    createCamera,
    createRenderer,
    createLight,
    createCube,
};