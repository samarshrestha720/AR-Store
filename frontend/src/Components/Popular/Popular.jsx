import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

import './Popular.css';
import Item from '../Items/Item';
import ColorfulText from '../Common/ColorfulText';

const Popular = () => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="popular">
      <h1>
        <ColorfulText>POPULAR</ColorfulText> ITEMS
      </h1>
      <hr />
      <div className="popular-item">
        {all_product.slice(0, 3).map((item, i) => {
          return (
            <Item
              key={i}
              id={item.pid}
              name={item.name}
              image={item.image[0]}
              new_price={item.salePrice}
              old_price={item.price}
              className="product-item"
            />
          );
          // } else return null;
        })}
      </div>
    </div>
  );
};

export default Popular;
