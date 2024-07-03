import React from 'react';
import './Navbar.css';
import logo from '../Assets/logo.svg';
import cart_icon from '../Assets/cart_icon.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = ({ setIsSidebarOpen }) => {
  const [menu, setMenu] = useState('shop');

  const handleOpenSidebar = () => {
    console.log('sidebar set to true');
    setIsSidebarOpen(true);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="nav-logo" />
        </Link>
      </div>
      <Menu className="burger-menu" onClick={handleOpenSidebar} />
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu('shop');
          }}
        >
          <Link
            style={{ textDecoration: 'none' }}
            className="NavBarLink"
            to="/"
          >
            Shop
          </Link>
          {menu === 'shop' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('chairs');
          }}
        >
          <Link
            style={{ textDecoration: 'none' }}
            to="/chairs"
            className="NavBarLink"
          >
            Chair
          </Link>
          {menu === 'chairs' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('sofas');
          }}
        >
          <Link
            style={{ textDecoration: 'none' }}
            to="/sofas"
            className="NavBarLink"
          >
            Sofa
          </Link>
          {menu === 'sofas' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('shelfs');
          }}
        >
          <Link
            style={{ textDecoration: 'none' }}
            to="/shelfs"
            className="NavBarLink"
          >
            Shelf
          </Link>
          {menu === 'shelfs' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('lamps');
          }}
        >
          <Link
            style={{ textDecoration: 'none' }}
            to="/lamps"
            className="NavBarLink"
          >
            Lamp
          </Link>
          {menu === 'lamps' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('tables');
          }}
        >
          <Link
            style={{ textDecoration: 'none' }}
            to="/tables"
            className="NavBarLink"
          >
            Table
          </Link>
          {menu === 'tables' ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('token') ? (
          <button
            onClick={() => {
              localStorage.removeItem('token');
              window.location.replace('/');
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
