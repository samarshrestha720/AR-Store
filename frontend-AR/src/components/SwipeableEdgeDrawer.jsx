import React, { useState } from "react";
import Button from "@mui/material/Button";
import Slider from "./Slider";

export const SwipeableEdgeDrawer = (props) => {
  const [selected, setSelected] = useState(null);

  function openNav() {
    console.log("open NAv called");
    document.getElementById("bottomNav").style.height = "40vh";
    document.getElementById("bottomNav").style.zIndex = 1;
  }
  function closeNav() {
    console.log("Close NAv called");
    document.getElementById("bottomNav").style.height = "0px";
    document.getElementById("bottomNav").style.zIndex = 0;
  }
  function changeSelected(id) {
    setSelected(id); //works
    props.changeSelected(id);
  }

  return (
    <>
      <Button
        id="openButton"
        variant="outlined"
        style={{ position: "absolute", bottom: "15rem", left: "10vw" }}
        onClick={openNav}
      >
        More Furnitures
      </Button>

      <div className="footerSlideContainer" id="bottomNav">
        <div className="headerContainer">
          <p className="headerTitle">Select Furnitures to Place</p>
          <Button id="closeButton" onClick={closeNav}>
            Close
          </Button>
        </div>
        <div className="bodyContainer">
          <Slider changeSelected={changeSelected} />
        </div>
      </div>
    </>
  );
};

export default SwipeableEdgeDrawer;
