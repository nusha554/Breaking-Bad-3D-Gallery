import React from "react";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import { OrbitControls } from "@react-three/drei";

const CubeContainer = ({ img }) => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={4} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <Cube img={img} />
    </Canvas>
  );
};

export default CubeContainer;
