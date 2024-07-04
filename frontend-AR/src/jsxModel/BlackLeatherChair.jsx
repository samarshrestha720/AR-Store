import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function BlackLeatherChair(props) {
  const { nodes, materials } = useGLTF("/models/6.glb");
  return (
    <group {...props} dispose={null} rotation={props.rotation}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.koltuk.geometry}
        material={materials.chair}
        rotation={[0, -0.505, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/6.glb");
