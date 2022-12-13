import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";


const Cube = ({ img }) => {
  const colorMap = useLoader(TextureLoader, img);
  

  return (
    <mesh rotation={[30, 0, 100]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshBasicMaterial map={colorMap} />
    </mesh>
  );
};

export default Cube;
