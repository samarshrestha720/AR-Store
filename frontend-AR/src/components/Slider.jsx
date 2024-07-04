import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Furniture from "./Furniture";
import { getAllProducts } from "../apis/ProductApis";

function Slider(props) {
  const [selected, setSelected] = useState(1);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getAllProducts();
        setItems(productsData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducts();

    return () => {
      // second
    };
  }, []);
  const itemsa = [
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
    {
      id: 3,
      name: "Wooden Table",
      price: 1500,
      imgLink:
        "https://mobileimages.lowes.com/productimages/87691378-d365-4145-9628-635bf8ee86c5/11571490.jpg",
    },
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
            id={data.pid}
            key={data.pid}
            onClick={() => click(data.pid)}
            imgLink={data.image[0]}
            data={data}
            style={data.pid === selected ? { border: "1px solid red" } : {}}
          />
        );
      })}
    </Carousel>
  );
}

export default Slider;
