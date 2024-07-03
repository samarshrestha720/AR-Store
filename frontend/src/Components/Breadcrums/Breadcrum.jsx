import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';
import { getCategoryName } from '../../utils/utils';
const Breadcrum = ({ product }) => {
  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />
      {getCategoryName(product?.categoryId)} <img src={arrow_icon} alt="" />{' '}
      {product?.name}
    </div>
  );
};

export default Breadcrum;
