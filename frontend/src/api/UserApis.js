import { BACKEND_BASE_URL as base_url } from "./env";

export const userLogin = (formData) => {
  const { email, password } = formData;
  console.log(formData);
};

export const userSignup = (formData) => {
  const { name, email, password, phone, address } = formData;
  console.log(formData);
};
