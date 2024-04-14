import React, { forwardRef, useState } from "react";
import Button from "@mui/material/Button";
import SwipeableEdgeDrawer from "./SwipeableEdgeDrawer";

const Interface = forwardRef((props, ref) => {
  const [selected, setSelected] = useState(null);

  function changeSelected(id) {
    setSelected(id); //works
    props.changeSelected(id);
  }
  return (
    <div className="Interface-All" ref={ref}>
      <Button
        variant="outlined"
        onClick={props.place}
        style={{
          position: "absolute",
          bottom: "20rem",
          maxWidth: "100px",
          maxHeight: "50px",
          left: "10vw",
        }}
      >
        Place Furniture
      </Button>
      <SwipeableEdgeDrawer changeSelected={changeSelected} />
    </div>
  );
});

export default Interface;
