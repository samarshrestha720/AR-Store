import { BACKEND_BASE_URL as base_url } from "./env";

export const userLogin = async (formData) => {
  const { email, password } = formData;
  const payload = {
    email: email,
    password: password,
  };
  try {
    console.log("Starting User Login", payload);
    const response = await fetch(`${base_url}/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.log(errorResponse.msg);
      throw new Error(`Failed to Login: ${errorResponse.msg}`);
    }

    const result = await response.json();
    localStorage.setItem("token", result.token);
    window.location.replace("/");
    return result.token;
  } catch (error) {
    // console.error("Error Logging in User:", error);
    throw error;
  }
};

export const userSignup = async (formData) => {
  const { name, email, password, phone, address } = formData;
  const payload = {
    name: name,
    email: email,
    password: password,
    phone: phone,
    address: address,
  };
  try {
    console.log("Starting User Signup", payload);
    const response = await fetch(`${base_url}/api/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.log(errorResponse.msg);
      throw new Error(`Failed to Signup: ${errorResponse.msg}`);
    }

    const result = await response.json();
    window.location.replace("/login"); // Redirect to the homepage or any other page
    return result;
  } catch (error) {
    throw error;
  }
};
