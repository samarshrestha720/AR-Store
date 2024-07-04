import React from 'react';
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png';
import ColorfulText from '../Common/ColorfulText';

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-wrapper">
        <div className="offers-left">
          <h1>
            <ColorfulText>Exclusive</ColorfulText>
          </h1>
          <h1>Offers For You</h1>
          <p>ONLY ON BEST SELLERS PRODUCTS</p>
          <button>Check Now</button>
        </div>
        <div className="offers-right">
          <img src={exclusive_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Offers;
