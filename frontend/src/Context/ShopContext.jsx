import React, { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../api/ProductApis";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [all_product, setAll_Product] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getAllProducts();
        setAll_Product(productsData);
      } catch (error) {
        setErrMessage(error.message);
      }
    };

    fetchProducts();

    return () => {
      // second
    };
  }, []);

  const contextValue = { all_product };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
