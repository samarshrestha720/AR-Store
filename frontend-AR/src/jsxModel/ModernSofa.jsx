import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ModernSofa(props) {
  const { nodes, materials } = useGLTF("/models/3.glb");
  return (
    <group {...props} dispose={null} rotation={props.rotation}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sofa_panda_01_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sofa_panda_01_2.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sofa_panda_01_3.geometry}
          material={materials.Material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/3.glb");
