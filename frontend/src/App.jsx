import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import Footer from "./Components/Footer/Footer";
import ModelView from "./Pages/ModelView";
import Sidebar from "./Components/Sidebar/Sidebar";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  
  return (
    <div>
      <BrowserRouter>
        <Navbar setIsSidebarOpen={setIsSidebarOpen} />
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="Chair" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="Sofa" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="Shelf" />}
          />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />}>
              {/* <Route path="modelView" element={<ModelView />}></Route> */}
            </Route>
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/modelview/:productId" element={<ModelView />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
