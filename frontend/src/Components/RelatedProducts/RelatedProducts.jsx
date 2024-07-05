import React, { useContext } from "react";
import "./RelatedProducts.css";
// import data_product from "../Assets/data";
import Item from "../Items/Item";
import { ShopContext } from "../../Context/ShopContext";
const RelatedProducts = () => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {all_product.slice(5, 8).map((item, idx) => {
          return (
            <Item
              key={idx}
              id={item.id}
              name={item.name}
              image={item.image[0]}
              new_price={item.salePrice}
              old_price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
