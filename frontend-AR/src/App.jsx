import { Canvas } from "@react-three/fiber";
import "./App.css";
import { ARButton, XR } from "@react-three/xr";
import Reticle from "./components/Reticle";
import Interface from "./components/Interface";
import { useCallback, useRef, useState } from "react";

function App() {
  const [overlay, setOverlay] = useState(null);
  const [selected, setSelected] = useState(1);

  function changeSelected(id) {
    setSelected(id); //works
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
          <Reticle ref={reticleRef} />
        </XR>
      </Canvas>
      <Interface
        ref={interfaceRef}
        place={placeFurnitureRef}
        changeSelected={changeSelected}
      />
    </>
  );
}

export default App;
