import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Cube = ({ img }) => {
  const colorMap = useLoader(TextureLoader, img);
  

  return (
    <mesh rotation={[Math.PI / 2, 0, 0]} >
    
      <boxBufferGeometry  args={[2, 2, 2]} />
      <meshBasicMaterial map={colorMap} />
    </mesh>
  );
};

export default Cube;
