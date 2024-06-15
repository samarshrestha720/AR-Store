import { Container, Typography } from '@mui/material';

import AddProductForm from '../addproduct-form';

export default function AddProductView() {
  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Add Products
      </Typography>
      <AddProductForm />
    </Container>
  );
}
