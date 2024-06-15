import { BACKEND_BASE_URL } from '../../variables';

const base_url = BACKEND_BASE_URL;

export const addProduct = async (data) => {
  const categoryMap = {
    Chair: 1,
    Sofa: 2,
    Shelf: 3,
    Lamp: 4,
    Table: 5,
  };
  const getCategoryId = categoryMap[data.Category];
  const payload = {
    name: data.ProductName,
    description: data.ProductDescription,
    price: parseFloat(data.Price),
    salePrice: data.SalePrice ? parseFloat(data.SalePrice) : null,
    image: data.imgs,
    categoryId: parseInt(getCategoryId, 10),
  };

  // Make the POST request
  try {
    console.log('Starting Product Upload', payload);
    const response = await fetch(`${base_url}/api/product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

export const getProduct = async (data) => {};
