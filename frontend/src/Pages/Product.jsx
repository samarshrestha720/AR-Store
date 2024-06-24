import React, { useContext } from "react";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import { Outlet, useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams(); //do like the admin panel
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      {/* <DescriptionBox /> */}
      <RelatedProducts />
      {/* <Outlet /> */}
    </div>
  );
};

export default Product;
