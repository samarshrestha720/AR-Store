import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function RedSofa(props) {
  const { nodes, materials } = useGLTF("/models/4.glb");
  return (
    <group {...props} dispose={null} scale={0.015} rotation={props.rotation}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_1.geometry}
        material={materials.DefaultMaterial}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_1.geometry}
        material={materials.DefaultMaterial}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle_1.geometry}
        material={materials.DefaultMaterial}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003_1.geometry}
        material={materials.DefaultMaterial}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload("/models/4.glb");
