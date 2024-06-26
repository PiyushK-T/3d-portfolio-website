import { useAnimations, useGLTF, OrthographicCamera  } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import foxLaptopScene from "../assets/3d/foxGrass.glb";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import CanvasLoader from "./Loader";

const FoxLaptop = ({ scale, position }) => {
  const foxLaptopRef = useRef();
  const { scene } = useGLTF(foxLaptopScene);
//   const { actions } = useAnimations(animations, foxLaptopRef);

//   useEffect(() => {
//     actions["Idle"].play();
//   }, [actions]);

  return (
    <mesh ref={foxLaptopRef} position={position} scale={scale} rotation={[0, 0, 0]}>
      <primitive object={scene} />
    </mesh>
  );
};

const FoxLaptopCanvas = () => {
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [scale, setScale] = useState([2, 2, 2]);
  const [position, setPosition] = useState([11,-4, 0]);

  useEffect(() => {
    // const handleScroll = () => {
      // const scrollTop = scrollContainer.current.scrollTop;
      // const rotationXValue = scrollTop * -0.0006;
      // const rotationYValue = scrollTop * -0.00075;
      // setRotationX(rotationXValue);
      // setRotationY(rotationYValue);
    // };

    // responsive --- change the positions
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale([1.5,1.5,1.5]);
        setPosition([-0.4,-1.9,0]);
      } else if (window.innerWidth < 1024) {
        setScale([1,1,1]);
        setPosition([-0.4,-1.7,0]);
      } else if (window.innerWidth < 1280) {
        setScale([1,1,1]);
        setPosition([-0.4,-1.7,0]);
      } else if (window.innerWidth < 1536) {
        setScale([1,1,1]);
        setPosition([-0.4,-1.7,0]);
      } else {
        setScale([1,1,1]);
        setPosition([-0.4,-1.8,0]);
      }
    };

    handleResize();
      window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },
[]);

  return (
    <Canvas 
        className="w-full h-screen bg-transparent z-10"
        shadows
        dpr={[1, 1.5]}
        camera={{fov:30, near: 0.1, far: 1000, position:[0,0,15]}}
      >
      <Suspense fallback={<CanvasLoader />}>
        <FoxLaptop rotationX={rotationX} rotationY={rotationY} scale={scale} position={position} />
        <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.65}
            scale={50}
            blur={1}
            far={9}
          />
          <ContactShadows
            position={[0, -1.25, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          />
        <Environment preset="city"/>
      </Suspense>
    </Canvas>
  );
};

export default FoxLaptopCanvas;
