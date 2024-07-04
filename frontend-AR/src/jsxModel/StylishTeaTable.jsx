import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function StylishTeaTable(props) {
  const { nodes, materials } = useGLTF("/models/10.glb");
  return (
    <group {...props} dispose={null} rotation={props.rotation}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tea_Table_1.geometry}
        material={materials["Tea Table"]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/models/10.glb");
