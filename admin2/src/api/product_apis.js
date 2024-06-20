import { BACKEND_BASE_URL } from '../../variables';

const base_url = BACKEND_BASE_URL;

const categoryMap = {
  Chair: 1,
  Sofa: 2,
  Shelf: 3,
  Lamp: 4,
  Table: 5,
};
export const addProduct = async (data) => {
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
    return result.status;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

export const getAProduct = async (pid) => {
  try {
    const response = await fetch(`${base_url}/api/product/${pid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    console.log('Get A Product Successful!!');
    const data = await response.json();
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.error('Failed to fetch a product:', error);
    throw error; // Re-throw the error for further handling if needed
  }
};

export const getAllProducts = async () => {
  //  make a GET Request

  try {
    const response = await fetch(`${base_url}/api/product`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    console.log('Get All Products Successful!!');
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error; // Re-throw the error for further handling if needed
  }
};

export const updateProduct = async (data) => {
  const getCategoryId = categoryMap[data.Category];
  const payload = {
    pid: data.pid,
    name: data.name,
    description: data.description,
    price: parseFloat(data.price),
    salePrice: data.salePrice ? parseFloat(data.salePrice) : null,
    categoryId: parseInt(getCategoryId, 10),
  };
  // Make the POST request
  try {
    console.log('Starting Product Upload', payload);
    const response = await fetch(`${base_url}/api/product`, {
      method: 'PUT',
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
    return result.status;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};
