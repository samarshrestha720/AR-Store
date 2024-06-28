import { BACKEND_BASE_URL as base_url } from "./env";

export const getAllProducts = async () => {
  try {
    console.log("Fetching Products");
    const response = await fetch(`${base_url}/api/product`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.log(errorResponse.msg);
      throw new Error(`Failed to Fetch Products: ${errorResponse.msg}`);
    }

    const result = await response.json();
    console.log("Products fetched:", result);
    return result;
  } catch (error) {
    console.error("Error Fetching Products:", error);
    throw error;
  }
};
