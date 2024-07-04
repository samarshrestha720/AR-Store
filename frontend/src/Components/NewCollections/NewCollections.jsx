import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './NewCollections.css';
import Item from '../Items/Item';
import ColorfulText from '../Common/ColorfulText';
const NewCollections = () => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="new-collections">
      <h1>
        <ColorfulText>NEW</ColorfulText> COLLECTION
      </h1>
      <div className="collections">
        {all_product.slice(4, 12).map((item, i) => {
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

export default NewCollections;
