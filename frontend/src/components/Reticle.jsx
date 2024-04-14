import React, { forwardRef, useImperativeHandle, useState } from "react";
import { useRef } from "react";
import { Interactive, useHitTest } from "@react-three/xr";
import Model from "../jsxModel/Model";
import { Color } from "three";

const Reticle = forwardRef((props, ref) => {
  const reticleRef = useRef();
  const [furnitures, setFurnitures] = useState([]);

  //place with button click
  useImperativeHandle(ref, () => ({
    placeOnReticle(selected) {
      let position = reticleRef.current.position.clone();
      let id = Date.now();
      let furnitureId = selected;
      setFurnitures([...furnitures, { position, id, furnitureId }]);
    },
  }));

  useHitTest((hitMatrix, hit) => {
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.quaternion,
      reticleRef.current.scale
    );
    reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
  });

  //place with reticle click
  // const place = (e) => {
  //   let position = e.intersection.object.position.clone();
  //   let id = Date.now();
  //   setFurnitures([...furnitures, { position, id }]);
  // };
  return (
    <>
      <ambientLight intensity={10} />
      {furnitures.map(({ position, id, furnitureId }) => {
        return <Model key={id} position={position} furnitureId={furnitureId} />;
      })}

      {/* <Interactive onSelect={place}> */}
      <Interactive>
        <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
          <ringGeometry args={[0.1, 0.25, 32]} />
          <meshStandardMaterial color={"white"} />
        </mesh>
      </Interactive>
    </>
  );
});

export default Reticle;
