import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Mustangboth(props) {
  const { nodes, materials } = useGLTF('/models/mustang_both-transformed.glb');

  return (
  <group {...props} dispose={null} scale={[.5, .5, .5]}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.S_Mustang_Color_1} />
      <mesh
        geometry={nodes.Object_24.geometry}
        material={materials["S_Mustang_Color_1.001"]}
        position={[2.852, 0, 0.085]}
        rotation={[-Math.PI, 0.436, -Math.PI]}

      />
      <mesh geometry={nodes.Object_5.geometry} material={materials.S_Mustang_pAL} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.S_Mustang_outline} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.Material} />
      <mesh geometry={nodes.Object_10.geometry} material={materials["Material.001"]} />
    </group>
  );
}

useGLTF.preload("/models/mustang_both-transformed.glb");
