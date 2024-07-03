import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Items/Item';
import { getCategoryName } from '../utils/utils';
import { ArrowBigDown, ChevronDown } from 'lucide-react';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p style={{ fontSize: '12px' }}>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort By <ChevronDown />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === getCategoryName(item.categoryId)) {
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
          } else return null;
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
