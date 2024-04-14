import React, { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Chair3d } from "./Chair3d";
import { TeaTable01 } from "./TeaTable01";
import { Wooden_table } from "./Wooden_table";

const Model = ({ position, furnitureId }, props) => {
  // const gltf = useGLTF("/models/mordernChair.gltf");
  // gltf.scene.scale.set(0.01, 0.01, 0.01);

  if (furnitureId === 1) {
    return <Chair3d position={position} />;
  } else if (furnitureId === 2) {
    return <TeaTable01 position={position} />;
  } else if (furnitureId === 3) {
    return <Wooden_table position={position} />;
  }

  // return (
  //   <>
  //     <primitive position={position} object={gltf.scene} {...props} />
  //   </>
  // );
};

export default Model;

/*
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/bench.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.bench.geometry} material={materials["metal.004"]}>
        <mesh
          geometry={nodes.Plane005.geometry}
          material={materials["wood.003"]}
        />
        <mesh
          geometry={nodes.Plane001.geometry}
          material={materials["wood.004"]}
        />
        <mesh
          geometry={nodes.Vert001.geometry}
          material={materials["metal.003"]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/bench.gltf");
*/
