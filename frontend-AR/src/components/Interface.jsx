import React, { forwardRef, useState } from "react";
import Button from "@mui/material/Button";
import SwipeableEdgeDrawer from "./SwipeableEdgeDrawer";
import { Box, Slider } from "@mui/material";

const Interface = forwardRef((props, ref) => {
  function changeSelected(id) {
    props.changeSelected(id);
  }
  function toggleSlider() {
    const sliderContainer = document.getElementById("sliderContainer");
    if (sliderContainer.style.display === "none") {
      sliderContainer.style.display = "block"; // Or any other display value you want
    } else {
      sliderContainer.style.display = "none";
    }
  }
  const sliderChange = (event, newValue) => {
    props.changeSliderValue(newValue);
  };

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
      <SwipeableEdgeDrawer
        changeSelected={changeSelected}
        toggleSlider={toggleSlider}
      />
      <Button
        variant="outlined"
        onClick={toggleSlider}
        style={{
          position: "absolute",
          bottom: "20vh",
          maxWidth: "100px",
          maxHeight: "50px",
          left: "10vw",
        }}
      >
        Rotation
      </Button>
      <Box
        id="sliderContainer"
        sx={{ width: "80vw" }}
        style={{
          position: "absolute",
          bottom: "5rem",
          // maxWidth: "0.8 * vw",
          maxHeight: "50px",
          marginLeft: "10vw",
          marginRight: "10vw",
          display: "none",
        }}
      >
        <Slider
          defaultValue={0}
          min={0}
          max={2 * Math.PI}
          step={0.01}
          onChange={sliderChange}
        />
      </Box>
    </div>
  );
});

export default Interface;
