import { Environment, Lightformer } from '@react-three/drei';
import React from 'react';

const StudioLights = () => {
  return (
    <Environment resolution={256}>

      <Lightformer
        form="rect"
        intensity={2}
        color="white"
        position={[-5, 5, 5]}
        target={[0, 0, 0]}
        scale={[10, 10, 1]}
      />
      <Lightformer
        form="rect"
        intensity={2}
        color="white"
        position={[10, 10, 10]}
        target={[0, 0, 0]}
        scale={[10, 10, 1]}
      />
       <Lightformer
        form="rect"
        intensity={1}
        color="white"
        position={[0, -5, 0]}
        target={[0, 0, 0]}
        scale={[10, 1, 1]}
      />

        <Lightformer
        form="rect"
        intensity={1}
        color="white"
        position={[0, 5, 0]}
        target={[0, 0, 0]}
        scale={[10, 1, 1]}
      />
      
    </Environment>
  );
};

export default StudioLights;

