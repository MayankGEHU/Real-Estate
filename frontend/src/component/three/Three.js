import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import a from '../../assets/Cottage_FREE.glb';

const HouseScene = () => {
  const { scene } = useGLTF(a);

  return (
    <Canvas
      style={{
        width: '100vw',  // Full width of the viewport
        height: '300px', // Adjust height as needed
      }}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <OrbitControls />
      <primitive object={scene} scale={2} position={[0, 0, 0]} />
    </Canvas>
  );
};

export default HouseScene;
