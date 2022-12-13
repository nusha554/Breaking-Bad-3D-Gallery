import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";

const CubeContainer = ({ img }) => {
  return (
    <Canvas className="canvas">
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <Cube img={img} />
    </Canvas>
  );
};

export default CubeContainer;
