import React, { useEffect, useState } from "react";
import "./CartItems.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import { getUserCart } from "../../api/CartApis";

const CartItems = () => {
  const [cartDetails, setCartDetails] = useState([]);
  useEffect(() => {
    const reqCartDetails = async () => {
      try {
        console.log("fetching cart");
        const cartResponse = await getUserCart();
        console.log(cartResponse);
        setCartDetails(cartResponse);
      } catch (error) {
        console.log(error);
        window.location.replace("/login");
      }
    };
    reqCartDetails();
    return () => {
      // second
    };
  }, []);
  let totalPrice = 0;

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {cartDetails.map((e, idx) => {
        const currentPrice = e.product.salePrice
          ? e.product.salePrice
          : e.product.price;
        totalPrice += currentPrice;
        return (
          <div key={idx}>
            <div className="cartitems-format cartitems-format-main">
              <img
                src={e.product.image[0]}
                alt=""
                className="carticon-product-icon"
              />
              <p>{e.product.name}</p>
              <p>Rs.{currentPrice}</p>
              <button className="cartitems-quantity">{e.quantity}</button>
              <p>Rs.{currentPrice * e.quantity}</p>
              <img
                className="cartitems-remove-icon"
                src={remove_icon}
                onClick={() => {
                  console.log("remove button clicked");
                }}
                alt=""
              />
            </div>
            <hr />
          </div>
        );
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>Rs.{totalPrice.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>Rs.{totalPrice.toFixed(2)}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
