import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";

const Grid3D = () => {
  return (
    <Wrapper>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Cube />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  canvas {
    height: 500px;
    background: orange;
  }
`;

export default Grid3D;
