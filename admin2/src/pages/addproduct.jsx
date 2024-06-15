import { Helmet } from 'react-helmet-async';

import { AddProductView } from 'src/sections/addproduct/view';

export default function addproduct() {
  return (
    <>
      <Helmet>
        <title>Add Products</title>
      </Helmet>
      <AddProductView />
    </>
  );
}
