import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function StandingDesk(props) {
  const { nodes, materials } = useGLTF("/models/9.glb");
  return (
    <group {...props} dispose={null} rotation={props.rotation}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={materials.main_body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018_1.geometry}
        material={materials.small_screen}
      />
    </group>
  );
}

useGLTF.preload("/models/9.glb");
