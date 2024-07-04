import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function BeanBag(props) {
  const { nodes, materials } = useGLTF("/models/2.glb");
  return (
    <group {...props} dispose={null} rotation={props.rotation}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bean_bag.geometry}
        material={materials.Bean_bag}
      />
    </group>
  );
}

useGLTF.preload("/models/2.glb");
