import React, { forwardRef, useImperativeHandle, useState } from "react";
import { useRef } from "react";
import { useHitTest } from "@react-three/xr";
import Model from "../jsxModel/Model";
import { useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Reticle = forwardRef((props, ref) => {
  const reticleRef = useRef();
  const [furnitures, setFurnitures] = useState([]);
  const [xrActive, setXrActive] = useState(false);
  const rotateY = props.rotateY;
  const { gl } = useThree();
  var touchDown, touchX, touchY, deltaX, deltaY;
  useGLTF.preload("/models/chair3d.gltf");

  gl.xr.addEventListener("sessionstart", function (event) {
    setXrActive(true);
  });

  //reset slider value of App.jsx
  function resetRotation() {
    props.resetSliderValue();
  }

  //place with button click
  useImperativeHandle(ref, () => ({
    placeOnReticle(selected) {
      let position = reticleRef.current.position.clone();
      let id = Date.now();
      let furnitureId = selected;
      setFurnitures([...furnitures, { position, id, furnitureId, rotateY }]);
      resetRotation();
    },
  }));

  useHitTest((hitMatrix, hit) => {
    if (xrActive) {
      hitMatrix.decompose(
        reticleRef.current.position,
        reticleRef.current.quaternion,
        reticleRef.current.scale
      );
    }
    // reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
  });

  //load when AR active
  const loadModel = () => {
    if (xrActive) {
      return <Model furnitureId={props.currentSelected} rotateY={rotateY} />;
    }
  };

  //place with reticle click
  // const place = (e) => {
  //   let position = e.intersection.object.position.clone();
  //   let id = Date.now();
  //   setFurnitures([...furnitures, { position, id }]);
  // };
  return (
    <>
      <ambientLight intensity={10} />
      {furnitures.map(({ position, id, furnitureId, rotateY }) => {
        return (
          <Model
            key={id}
            position={position}
            furnitureId={furnitureId}
            rotateY={rotateY}
          />
        );
      })}

      {/* <Interactive onSelect={place}> */}

      <mesh ref={reticleRef}>
        {/* <ringGeometry args={[0.1, 0.25, 32]} />
        <meshStandardMaterial color={"white"} /> */}
        {loadModel()}
      </mesh>
    </>
  );
});

export default Reticle;
useGLTF.preload("/models/chair3d.gltf");
