import React from "react";
import "./CSS/ModelView.css";
import { useParams } from "react-router-dom";

function ModelView() {
  const { productId: pid } = useParams();
  console.log(pid);
  return (
    <model-viewer
      alt="View Models"
      src={`/models/${pid}.glb`}
      tone-mapping="neutral"
      shadow-intensity="1"
      ar
      camera-controls
      touch-action="pan-y"
    >
      <button slot="ar-button" id="ar-button">
        View in your space
      </button>
    </model-viewer>
  );
}

export default ModelView;
