import React, { useState } from "react";
import "./CSS/LoginSignup.css";
import { userLogin, userSignup } from "../api/UserApis";
import { Form } from "react-router-dom";
const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    state === "Signup" ? signup() : login();
  };

  const login = () => {
    userLogin(formData);
  };

  const signup = () => {
    userSignup(formData);
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        {state === "Login" ? <h1>Login</h1> : <h1>Sign Up</h1>}
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            {state === "Signup" ? (
              <input
                required
                name="name"
                onChange={changeHandler}
                type="text"
                placeholder="Your Name"
                value={formData.name}
              />
            ) : null}
            {state === "Signup" ? (
              <input
                name="address"
                onChange={changeHandler}
                type="text"
                placeholder="Your Address"
                value={formData.address}
              />
            ) : null}
            {state === "Signup" ? (
              <input
                name="phone"
                onChange={changeHandler}
                type="text"
                placeholder="Your Phone Number"
                value={formData.phone}
              />
            ) : null}
            <input
              required
              name="email"
              onChange={changeHandler}
              type="email"
              placeholder="Email Address"
              value={formData.email}
            />
            <input
              required
              name="password"
              onChange={changeHandler}
              type="password"
              placeholder="Password"
              value={formData.password}
            />
          </div>
          <button type="Submit">{state}</button>
          {state === "Signup" ? (
            <p className="loginsignup-login">
              Already have an account?{" "}
              <span onClick={() => setState("Login")}>Login here</span>
            </p>
          ) : (
            <p className="loginsignup-login">
              Don't have an account?{" "}
              <span onClick={() => setState("Signup")}>Signup here</span>
            </p>
          )}
          {/* <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing , i agree to the terms of use & privacy policy. </p>
        </div> */}
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
