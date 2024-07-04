import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function SmallDarkWoodTable(props) {
  const { nodes, materials } = useGLTF("/models/8.glb");
  return (
    <group {...props} dispose={null} rotation={props.rotation}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_top.geometry}
        material={materials.Table}
        position={[0, 1.043, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/8.glb");
