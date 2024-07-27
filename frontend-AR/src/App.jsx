import { Canvas } from "@react-three/fiber";
import "./App.css";
import { ARButton, XR } from "@react-three/xr";
import Reticle from "./components/Reticle";
import Interface from "./components/Interface";
import { useCallback, useRef, useState } from "react";

function App() {
  const [overlay, setOverlay] = useState(null);
  const [selected, setSelected] = useState(1);
  const [sliderValue, setSliderValue] = useState(0);

  function changeSelected(id) {
    setSelected(id); //works
  }

  function changeSliderValue(newValue) {
    setSliderValue(newValue);
    console.log("slider value changed:", sliderValue);
  }

  function resetSliderValue() {
    console.log("slider value reset");
    setSliderValue(0);
  }

  const reticleRef = useRef();
  let interfaceRef = useCallback((node) => {
    if (node) {
      setOverlay(node);
    }
  });
  function placeFurnitureRef() {
    //call the place function on the reticle component
    reticleRef.current.placeOnReticle(selected);
    setSliderValue(0);
  }
  return (
    <>
      <ARButton
        sessionInit={{
          requiredFeatures: ["hit-test"],
          optionalFeatures: ["dom-overlay"],
          domOverlay: { root: overlay },
        }}
      />
      <Canvas>
        <XR>
          <ambientLight intensity={1} />
          <directionalLight color="white" position={[5, 5, 5]} />
          <Reticle
            ref={reticleRef}
            currentSelected={selected}
            rotateY={sliderValue}
            resetSliderValue={resetSliderValue}
          />
        </XR>
      </Canvas>
      <Interface
        ref={interfaceRef}
        place={placeFurnitureRef}
        changeSelected={changeSelected}
        changeSliderValue={changeSliderValue}
      />
    </>
  );
}

export default App;
