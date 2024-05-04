import React, { Suspense, useEffect } from "react";
import { flushGlobalEffects, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Chair3d } from "./Chair3d";
import { TeaTable01 } from "./TeaTable01";
import { Wooden_table } from "./Wooden_table";
import { useState } from "react";
import { Interactive } from "@react-three/xr";
import { ConeGeometry } from "three";

const Model = ({ position, furnitureId, rotateY }, props) => {
  var rotation = [0, rotateY, 0];
  console.log(typeof rotateY);
  const furnitreComponent = (furnitureId) => {
    if (furnitureId === 1) {
      return <Chair3d position={position} rotation={rotation} />;
    } else if (furnitureId === 2) {
      return <TeaTable01 position={position} rotation={rotation} />;
    } else if (furnitureId === 3) {
      return <Wooden_table position={position} rotation={rotation} />;
    }
  };

  return <Interactive>{furnitreComponent(furnitureId)}</Interactive>;
};

export default Model;
