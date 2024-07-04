import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ModernBookshelf(props) {
  const { nodes, materials } = useGLTF("/models/7.glb");
  return (
    <group {...props} dispose={null} rotation={props.rotation}>
      <group position={[0, 0.464, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["wood.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials.wood}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/7.glb");
