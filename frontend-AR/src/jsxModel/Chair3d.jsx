import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";

export function Chair3d(props) {
  const { nodes, materials } = useGLTF("/models/chair3d.gltf");
  console.log("rotation=", props.rotation);
  console.log(typeof props.rotation);
  return (
    <group {...props} dispose={null} scale={2} rotation={props.rotation}>
      <group name="Chair" position={[-0.001, 0.18, 0.011]}>
        <mesh
          name="Plane004"
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials.Seat}
        />
        <mesh
          name="Plane004_1"
          castShadow
          receiveShadow
          geometry={nodes.Plane004_1.geometry}
          material={materials.Plastic}
        />
        <mesh
          name="Plane004_2"
          castShadow
          receiveShadow
          geometry={nodes.Plane004_2.geometry}
          material={materials["Gloss Plastic Bottom"]}
        />
        <mesh
          name="Plane004_3"
          castShadow
          receiveShadow
          geometry={nodes.Plane004_3.geometry}
          material={materials.Aluminium}
        />
        <mesh
          name="Plane004_4"
          castShadow
          receiveShadow
          geometry={nodes.Plane004_4.geometry}
          material={materials["Gloss Plastic Hand"]}
        />
        <mesh
          name="Plane004_5"
          castShadow
          receiveShadow
          geometry={nodes.Plane004_5.geometry}
          material={materials["Back Rest"]}
        />
        <mesh
          name="Plane004_6"
          castShadow
          receiveShadow
          geometry={nodes.Plane004_6.geometry}
          material={materials["Soft Aliminum"]}
        />
      </group>
    </group>
  );
}

// useGLTF.preload("/models/chair3d.gltf");
