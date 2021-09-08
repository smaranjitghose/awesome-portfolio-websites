import { useRef, useEffect } from "react";
import "./Terrain.css";

import * as THREE from "three";
import textureImage from "../../assets/images/terrain/terrian.jpg";
import heightImage from "../../assets/images/terrain/height.png";
import alphaImage from "../../assets/images/terrain/alpha.png";

const Terrain = () => {

    const canvasMount = useRef(null);
    const canvasContainer = useRef(null);

    useEffect(() => {
        const loader = new THREE.TextureLoader();
        const texture = loader.load(textureImage)
        const height = loader.load(heightImage)
        const alpha = loader.load(alphaImage)

        // Canvas
        const canvas = canvasMount.current;
        const sizes = {
            width: canvasContainer.current.offsetWidth,
            height: canvasContainer.current.offsetHeight,
        };

        // Scene
        const scene = new THREE.Scene();

        // Base camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 3;
        scene.add(camera);

        //Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
        });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Objects
        const geometry = new THREE.PlaneBufferGeometry(4.5, 4.5, 64, 64);

        // Materials
        const material = new THREE.MeshStandardMaterial({
            color: "gray",
            map: texture,
            displacementMap: height,
            displacementScale: 0.1,
            alphaMap: alpha,
            transparent: true,
            depthTest: false,
        });

        // Mesh
        const plane = new THREE.Mesh(geometry, material);
        plane.rotation.x = 181;
        scene.add(plane);

        // Lights

        const pointLight = new THREE.PointLight(0x00b3ff, 2.4);
        pointLight.position.x = 0.2;
        pointLight.position.y = 10;
        pointLight.position.z = 4.4;
        scene.add(pointLight);

        window.addEventListener("resize", () => {
            // Update sizes
            sizes.width = canvasContainer.current.offsetWidth;
            sizes.height = canvasContainer.current.offsetHeight;

            // Update camera
            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();

            // Update renderer
            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });

        const clock = new THREE.Clock();

        let mouseY = 0;
        document.addEventListener("mousemove", (e) => {
            mouseY = e.clientY;
        });

        const tick = () => {
            const elapsedTime = clock.getElapsedTime();
            plane.rotation.z = elapsedTime * 0.5;
            plane.material.displacementScale = 0.3 + mouseY * 0.0006;
            renderer.render(scene, camera);
            window.requestAnimationFrame(tick);
        };

        tick();
    }, []);
    
    return (
        <div ref={canvasContainer} class="canvasContainer">
            <canvas ref={canvasMount} class="webgl"></canvas>
        </div>
    );
};

export default Terrain;
