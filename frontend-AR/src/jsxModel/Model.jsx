import React, { Suspense, useEffect } from "react";
import { flushGlobalEffects, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Interactive } from "@react-three/xr";

import { OfficeChair } from "./OfficeChair";
import { BeanBag } from "./BeanBag";
import { ModernSofa } from "./ModernSofa";
import { RedSofa } from "./RedSofa";
import { MiniCupboard } from "./MiniCupboard";
import { BlackLeatherChair } from "./BlackLeatherChair";
import { ModernBookshelf } from "./ModernBookshelf";
import { SmallDarkWoodTable } from "./SmallDarkWoodTable";
import { StandingDesk } from "./StandingDesk";
import { StylishTeaTable } from "./StylishTeaTable";

const Model = ({ position, furnitureId, rotateY }, props) => {
  var rotation = [0, rotateY, 0];
  console.log(typeof rotateY);
  const furnitreComponent = (furnitureId) => {
    if (furnitureId === 1) {
      return <OfficeChair position={position} rotation={rotation} />;
    } else if (furnitureId === 2) {
      return <BeanBag position={position} rotation={rotation} />;
    } else if (furnitureId === 3) {
      return <ModernSofa position={position} rotation={rotation} />;
    } else if (furnitureId === 4) {
      return <RedSofa position={position} rotation={rotation} />;
    } else if (furnitureId === 5) {
      return <MiniCupboard position={position} rotation={rotation} />;
    } else if (furnitureId === 6) {
      return <BlackLeatherChair position={position} rotation={rotation} />;
    } else if (furnitureId === 7) {
      return <ModernBookshelf position={position} rotation={rotation} />;
    } else if (furnitureId === 8) {
      return <SmallDarkWoodTable position={position} rotation={rotation} />;
    } else if (furnitureId === 9) {
      return <StandingDesk position={position} rotation={rotation} />;
    } else if (furnitureId === 10) {
      return <StylishTeaTable position={position} rotation={rotation} />;
    }
  };

  return <Interactive>{furnitreComponent(furnitureId)}</Interactive>;
};

export default Model;
