import { Container, Typography } from '@mui/material';
import React from 'react';
import EditProductForm from '../editproduct-form';

export default function EditProductView() {
  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        View / Edit Products
      </Typography>
      <EditProductForm />
    </Container>
  );
}
