import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <Link
      to={`/product/${props.id}`}
      style={{ textDecoration: 'none', color: 'black' }}
      className="item-link"
    >
      <div className="item" onClick={() => window.scroll(0, 0)}>
        <figure>
          <img src={props.image} alt="" />
        </figure>
        <p>{props.name}</p>
        <div className="item-prices">
          {props.new_price ? (
            <>
              <div className="item-price-new">Rs.{props.new_price}</div>
              <div className="item-price-old">Rs.{props.old_price}</div>
            </>
          ) : (
            <div className="item-price-new">Rs.{props.old_price}</div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Item;
