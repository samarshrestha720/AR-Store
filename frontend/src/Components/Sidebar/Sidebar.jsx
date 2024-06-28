import React, { useState, useRef } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useOnClickOutside } from 'usehooks-ts';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [menu, setMenu] = useState("shop");
  const sidebarRef = useRef(null);

  useOnClickOutside(sidebarRef, () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  });

  {
    return (
      <div ref={sidebarRef} className={`sidebar ${isSidebarOpen ? 'toggleSidebar' : 'closeSidebar'}`}>
        <div className="sidebar-wrapper">
          <ul className="sidebar-menu">
            <li
              onClick={() => {
                setMenu("shop");
              }}
            >
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Shop
              </Link>
              {menu === "shop" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu("mens");
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/mens"
              >
                Men
              </Link>
              {menu === "mens" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu("womens");
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/womens"
              >
                Women
              </Link>
              {menu === "womens" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu("kids");
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/kids"
              >
                Kids
              </Link>
              {menu === "kids" ? <hr /> : <></>}
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default Sidebar;
