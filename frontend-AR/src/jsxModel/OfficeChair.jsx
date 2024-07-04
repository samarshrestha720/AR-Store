import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function OfficeChair(props) {
  const { nodes, materials } = useGLTF("/models/1.glb");
  return (
    <group {...props} dispose={null} scale={2} rotation={props.rotation}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials.Seat}
        position={[-0.001, 0.18, 0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004_1.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.001, 0.18, 0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004_2.geometry}
        material={materials.PaletteMaterial002}
        position={[-0.001, 0.18, 0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004_3.geometry}
        material={materials.PaletteMaterial003}
        position={[-0.001, 0.18, 0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004_5.geometry}
        material={materials["Back Rest"]}
        position={[-0.001, 0.18, 0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004_6.geometry}
        material={materials.PaletteMaterial004}
        position={[-0.001, 0.18, 0.011]}
      />
    </group>
  );
}

useGLTF.preload("/models/1.glb");
