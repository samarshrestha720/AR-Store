import React, { useContext } from 'react';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams(); //do like the admin panel
  const product = all_product.find((e) => e.pid === Number(productId));
  console.log(all_product, product);
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <div style={{ padding: '16px' }}>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default Product;
