import { useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import foxScene from "../assets/3d/fox3.glb";
import { ContactShadows, Environment } from "@react-three/drei";
import CanvasLoader from "./Loader";
import * as THREE from "three"; 
import gsap from "gsap";

const Fox = ({ scale, position }) => {
  const foxRef = useRef();
  const { scene, animations } = useGLTF(foxScene);
  const { actions } = useAnimations(animations, foxRef);

  const handleClick = () => {
    if (actions) {
      const Idle = Object.keys(actions)[0]; 
      const Move = Object.keys(actions)[1];
      if (Idle && Move) {
        actions[Idle].reset().play();
        actions[Idle].clampWhenFinished = true;
        actions[Idle].loop = THREE.LoopOnce;

        actions[Move].reset().play();
        actions[Move].clampWhenFinished = true;
        actions[Move].loop = THREE.LoopOnce;
      }
    }
  };

  return (
    <mesh ref={foxRef} position={position} scale={scale} rotation={[0, 0, 0]} onClick={handleClick}>
      <primitive object={scene} />
    </mesh>
  );
};

const FoxCanvas = () => {
  const [scale, setScale] = useState([2, 2, 2]);
  const [position, setPosition] = useState([11, -4, 0]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale([0.7, 0.7, 0.7]);
        setPosition([0, -2, 0]);
      } else if (window.innerWidth < 1280) {
        setScale([1, 1, 1]);
        setPosition([0, -2, 0]);
      } else if (window.innerWidth < 1536) {
        setScale([1, 1, 1]);
        setPosition([0, -2, 0]);
      } else {
        setScale([1, 1, 1]);
        setPosition([0, -2, 0]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Adding an empty dependency array to ensure this runs only once

  useEffect(() => {
    const pulse = () => {
      gsap.to(".radiating-light", {
        scale: 1.2,
        opacity: 0.2,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });
    };
    pulse();
  }, []);

  return (
    <div className="relative w-full h-screen">
      <div className="radiating-light absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[150px] h-[150px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] bg-white rounded-full blur-2xl opacity-0"></div>
      </div>
      <Canvas
        className="relative z-10"
        shadows
        dpr={[1, 1.5]}
        camera={{ fov: 30, near: 0.1, far: 1000, position: [0, 0, 12] }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <Fox scale={scale} position={position} />
          <ContactShadows
            position={[0, -2, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FoxCanvas;
