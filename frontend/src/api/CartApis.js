import { BACKEND_BASE_URL as base_url } from "./env";

export const getUserCart = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No authentication token found. Please log in.");
  }
  try {
    console.log("Fetching Cart");
    const response = await fetch(`${base_url}/api/cart`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.log(errorResponse.msg);
      throw new Error(`Failed to Fetch Cart: ${errorResponse.msg}`);
    }

    const result = await response.json();
    console.log("Cart fetched:", result.data.cartItems);
    return result.data.cartItems;
  } catch (error) {
    console.error("Error Fetching Cart:", error);
    throw error;
  }
};

export const addProductToCart = async (pid) => {
  const payload = {
    pid: pid,
    quantity: 1,
  };
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No authentication token found. Please log in.");
  }

  try {
    console.log("Adding Product to Cart", payload);
    const response = await fetch(`${base_url}/api/cart/addtocart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.log(errorResponse.msg);
      throw new Error(`Failed to Add Product to Cart: ${errorResponse.msg}`);
    }

    const result = await response.json();
    console.log("Product added to cart:", result);
    window.location.replace("/cart");
    return result;
  } catch (error) {
    console.error("Error Adding Product to Cart:", error);
    throw error;
  }
};

export const removeFromCart = async (pid) => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("User is not authenticated");
  }

  const payload = {
    pid: pid,
  };

  try {
    console.log("Removing product from cart", payload);
    const response = await fetch(`${base_url}/api/cart`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.log(errorResponse.msg);
      throw new Error(
        `Failed to remove product from cart: ${errorResponse.msg}`
      );
    }

    const result = await response.json();
    console.log(result.msg);
    return result.msg;
  } catch (error) {
    console.error("Error removing product from cart:", error);
    throw error;
  }
};
