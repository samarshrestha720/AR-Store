import { Button, Stack, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategoryName } from '../products/utils';
import { RouterLink } from 'src/routes/components';
import { getAProduct, updateProduct } from 'src/api/product_apis';

export default function EditProductForm() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);

  const { id: pid } = useParams();

  useEffect(() => {
    console.log(pid);
    const fetchProductDetails = async (pid) => {
      try {
        const data = await getAProduct(pid);
        data.category = getCategoryName(data.categoryId);
        setFormData(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetails(pid);

    return () => {
      // second;
    };
  }, [pid]);
  const [updateStatus, setUpdateStatus] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submit Clicked');
    try {
      console.log('Starting Update!');
      setUpdateStatus(false);
      const result = await updateProduct(formData);
      setUpdateStatus(result == 200 ? true : false);
    } catch (err) {
      console.log('Error Occured');
      console.log(err);
    }
  };
  const onChangeHandler = (event) => {
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      {updateStatus ? (
        <div
          style={{
            marginBottom: '2vh',
            padding: '10px',
            textAlign: 'center',
            borderRadius: '10px',
            backgroundColor: '#06D001',
          }}
        >
          Product Update Successful!!
        </div>
      ) : null}
      {loading ? (
        <>Loading...</>
      ) : (
        <Stack spacing={3} component="form" onSubmit={handleSubmit}>
          <TextField
            required
            label="Product Name"
            name="name"
            value={formData.name || ''}
            onChange={onChangeHandler}
          />
          <TextField
            required
            label="Product Description"
            name="description"
            value={formData.description || ''}
            onChange={onChangeHandler}
          />
          <TextField
            required
            label="Product Category"
            name="category"
            value={formData.category || ''}
            onChange={onChangeHandler}
          />
          <TextField
            required
            label="Product Price"
            name="price"
            value={formData.price || ''}
            onChange={onChangeHandler}
          />
          <TextField
            label="Product Sale Price"
            name="salePrice"
            value={formData.salePrice || ''}
            onChange={onChangeHandler}
          />
          <Button type="submit" variant="contained" color="inherit">
            Update Product Details
          </Button>
          <Button href={`/products/`} component={RouterLink} variant="outlined" color="error">
            Cancel
          </Button>
        </Stack>
      )}
    </>
  );
}
