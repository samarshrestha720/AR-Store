import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function MiniCupboard(props) {
  const { nodes, materials } = useGLTF("/models/5.glb");
  return (
    <group {...props} dispose={null} rotation={props.rotation}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.accent_cabinet_pfo_bsw.geometry}
        material={materials.accent_cabinet_Mat}
      />
    </group>
  );
}

useGLTF.preload("/models/5.glb");
