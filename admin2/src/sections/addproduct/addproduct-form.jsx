import { useState } from 'react';

import { Stack, Button, TextField } from '@mui/material';

import { addProduct } from 'src/api/product_apis';
import { uploadImg } from 'src/api/upload-to-imgur';

import ImageUploader from './image-uploader';

export default function AddProductForm() {
  const [formData, setFormData] = useState({
    ProductName: '',
    ProductDescription: '',
    Category: '',
    Price: '',
    SalePrice: '',
    imgs: [],
  });
  const [uploadStatus, setUploadStatus] = useState(null);

  const onChangeHandler = (event) => {
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };
  const onChangeImg = (data) => {
    setFormData(() => ({
      ...formData,
      imgs: data,
    }));
  };

  const uploadProduct = (urlArray) => {
    const updatedFormData = {
      ...formData,
      imgs: urlArray,
    };
    setFormData(updatedFormData);
    console.log('Starting Product Details Upload', updatedFormData);
    setUploadStatus(addProduct(updatedFormData));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submit called', formData);

    try {
      console.log('Starting Upload!');
      const imgUrls = await Promise.all(
        formData.imgs.map(async (file) => {
          const result = await uploadImg(file);
          return result;
        })
      );
      console.log('After imgurls', imgUrls);
      uploadProduct(imgUrls);
    } catch (err) {
      console.log('Error Occured');
      console.log(err);
    }
  };

  return (
    <Stack spacing={3} component="form" onSubmit={handleSubmit}>
      <TextField required label="Product Name" name="ProductName" onChange={onChangeHandler} />
      <TextField
        required
        label="Product Description"
        name="ProductDescription"
        onChange={onChangeHandler}
      />
      <Stack direction="row" spacing={2}>
        <TextField required label="Category" name="Category" onChange={onChangeHandler} />
        <TextField required label="Price" name="Price" onChange={onChangeHandler} />
        <TextField label="Sale Price" name="SalePrice" onChange={onChangeHandler} />
      </Stack>
      <ImageUploader onChange={onChangeImg} />
      <Button type="submit" variant="contained" color="inherit">
        Upload Product
      </Button>
      {uploadStatus === 200 ? 'Product Uploaded Successfully' : ''}
    </Stack>
  );
}
