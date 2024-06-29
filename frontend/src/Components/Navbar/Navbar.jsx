import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = ({ setIsSidebarOpen }) => {
  const [menu, setMenu] = useState("shop");

  const handleOpenSidebar = () => {
    console.log("sidebar set to true");
    setIsSidebarOpen(true);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="nav-logo" />
        <p>AR-Store</p>
      </div>
      <Menu className="burger-menu" onClick={handleOpenSidebar} />
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("chairs");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/chairs">
            Chair
          </Link>
          {menu === "chairs" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("sofas");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/sofas">
            Sofa
          </Link>
          {menu === "sofas" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("shelfs");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/shelfs">
            Shelf
          </Link>
          {menu === "shelfs" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("lamps");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/lamps">
            Lamp
          </Link>
          {menu === "lamps" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("tables");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/tables">
            Table
          </Link>
          {menu === "tables" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}

        <Link to="/cart">
          <img src={cart_icon} alt="cart-icon" />
        </Link>

        {/* <div className="nav-cart-count">0</div> */}
      </div>
    </div>
  );
};
export default Navbar;
