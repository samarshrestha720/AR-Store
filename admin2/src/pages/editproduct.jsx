import { Helmet } from 'react-helmet-async';

import { EditProductView } from 'src/sections/editproduct/view';

export default function EditProductPage() {
  return (
    <>
      <Helmet>
        <title>Edit/View Products</title>
      </Helmet>
      <EditProductView />
    </>
  );
}
