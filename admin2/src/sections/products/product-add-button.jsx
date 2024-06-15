import React from 'react';

import Button from '@mui/material/Button';

import { RouterLink } from 'src/routes/components';

export default function AddProductButton() {
  return (
    <Button href="/products/addproduct" component={RouterLink} variant="contained" color="inherit">
      <BxCartAdd />
      Add Product
    </Button>
  );
}

function BxCartAdd(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <circle cx={10.5} cy={19.5} r={1.5} fill="currentColor" />
      <circle cx={17.5} cy={19.5} r={1.5} fill="currentColor" />
      <path fill="currentColor" d="M13 13h2v-2.99h2.99v-2H15V5.03h-2v2.98h-2.99v2H13z" />
      <path
        fill="currentColor"
        d="M10 17h8a1 1 0 0 0 .93-.64L21.76 9h-2.14l-2.31 6h-6.64L6.18 4.23A2 2 0 0 0 4.33 3H2v2h2.33l4.75 11.38A1 1 0 0 0 10 17"
      />
    </svg>
  );
}
