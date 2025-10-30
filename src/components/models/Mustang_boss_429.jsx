import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Mustangboss429(props) {
  const { scene } = useGLTF('/models/mustang_boss_429-transformed.glb')
  
  return (
    <group {...props} scale={[0.57, 0.57, 0.57]} rotation={[0, -1.55, 0]} position={[0.0, 0, -0.05]}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload('/models/mustang_boss_429-transformed.glb')
