import React from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import arLogo from '../Assets/ar-logo.svg';
import { Link } from 'react-router-dom';
import { addProductToCart } from '../../api/CartApis';

const ProductDisplay = ({ product }) => {

  const addToCart = async (pid) => {
    try {
      await addProductToCart(pid);
    } catch (error) {
      localStorage.removeItem('token');
      window.location.replace('/login');
      return;
    }
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {product.image.map((image, i) => (
            <img src={image} alt="" key={i} />
          ))}
          
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image[0]}
            alt=""
          />
        </div>
      </div>

      
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            Rs.{product.price}
          </div>
          <div className="productdisplay-right-price-new">
            Rs.{product.salePrice}
          </div>
        </div>
        <div className="productdisplay-right-description">
          {product.description}
        </div>
      
        <div className="addToCartAndArButton">
          <button
            onClick={() => {
              addToCart(product.pid);
            }}
          >
            ADD TO CART
          </button>
          <Link
            to={`/modelview/${product.pid}`}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <div className="ar-button">
              <div className="arLogoSvg">
                <img src={arLogo} alt="" />
              </div>
              <div className="addToCartText">AR View</div>
            </div>
          </Link>
        </div>

        <p className="productdisplay-right-category">
          <span>Category : </span>
          Women, T-shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags : </span>
          Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
