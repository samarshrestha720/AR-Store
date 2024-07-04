import React, { useState, useRef } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { useOnClickOutside } from 'usehooks-ts';
import cart_icon from '../Assets/cart_icon.png';
import { ShoppingCart } from 'lucide-react';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [menu, setMenu] = useState('shop');
  const sidebarRef = useRef(null);

  useOnClickOutside(sidebarRef, () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  });

  return (
    <div
      ref={sidebarRef}
      className={`sidebar ${isSidebarOpen ? 'toggleSidebar' : 'closeSidebar'}`}
    >
      <div className="sidebar-wrapper">
        <ul className="sidebar-menu">
          <li
            onClick={() => {
              setMenu('shop');
            }}
          >
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
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
              style={{ textDecoration: 'none', color: 'white' }}
              to="/chairs"
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
              style={{ textDecoration: 'none', color: 'white' }}
              to="/sofas"
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
              style={{ textDecoration: 'none', color: 'white' }}
              to="/shelfs"
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
              style={{ textDecoration: 'none', color: 'white' }}
              to="/lamps"
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
              style={{ textDecoration: 'none', color: 'white' }}
              to="/tables"
            >
              Table
            </Link>
            {menu === 'tables' ? <hr /> : <></>}
          </li>
        </ul>

        <div className="sidebar-login-cart">
          {localStorage.getItem('token') ? (
            <button
              onClick={() => {
                localStorage.removeItem('token');
                window.location.replace('/');
              }}
              className="sidebar-login-button"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="sidebar-login-button">Login</button>
            </Link>
          )}

          <Link to="/cart">
            <ShoppingCart className="sidebar-cart-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
