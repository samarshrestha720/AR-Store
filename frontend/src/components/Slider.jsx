import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Furniture from "./Furniture";

function Slider(props) {
  const [selected, setSelected] = useState(1);
  const items = [
    {
      id: 1,
      name: "Chair",
      price: 1000,
      imgLink:
        "https://img-new.cgtrader.com/items/2629363/9ebab47c3e/interior-office-modern-chair-3d-model-obj-fbx-blend-gltf.jpg",
    },
    {
      id: 2,
      name: "Tea Table",
      price: 2000,
      imgLink:
        "https://img-new.cgtrader.com/items/3484454/477d5435dc/large/tea-table-3d-model-low-poly-obj-fbx-ma-gltf-usdz.jpg",
    },
    { id: 3, name: "Lamp", price: 1500 },
    { id: 4, name: "Gaming Chair", price: 5000 },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  function click(id) {
    setSelected(id);
    props.changeSelected(id); //change state of SwipeableEdgeDrawer
  }
  return (
    <Carousel responsive={responsive} className="Carousel">
      {items.map((data) => {
        return (
          <Furniture
            id={data.id}
            key={data.id}
            onClick={() => click(data.id)}
            imgLink={data.imgLink}
            data={data}
            style={data.id === selected ? { border: "1px solid red" } : {}}
          />
        );
      })}
    </Carousel>
  );
}

export default Slider;
