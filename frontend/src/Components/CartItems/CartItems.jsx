import React, { useEffect, useState } from "react";
import "./CartItems.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import { getUserCart } from "../../api/CartApis";

const CartItems = () => {
  const [cartDetails, setCartDetails] = useState([]);
  useEffect(() => {
    const reqCartDetails = async () => {
      console.log("fetching cart");
      const cartResponse = await getUserCart();
      console.log(cartResponse);
      setCartDetails(cartResponse);
    };
    reqCartDetails();

    return () => {
      // second
    };
  }, []);
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
        return (
          <div key={idx}>
            <div className="cartitems-format cartitems-format-main">
              <img
                src={e.product.image[0]}
                alt=""
                className="carticon-product-icon"
              />
              <p>{e.product.name}</p>
              <p>${currentPrice}</p>
              <button className="cartitems-quantity">{e.quantity}</button>
              <p>${currentPrice * e.quantity}</p>
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
      {/* <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CartItems;
