import React, { useEffect, useState } from "react";
import { getUserCart } from "../api/CartApis";
import CartItems from "../Components/CartItems/CartItems";

const cart = () => {
  return (
    <div>
      <CartItems />
    </div>
  );
};

export default cart;
