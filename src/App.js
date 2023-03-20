import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Protected from "./components/Protected";
import { AuthContextProvider, UserAuth } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import "./index.css";
import ImageScroller from "./components/ImageSlider";
import Donate from "./pages/Donate";
import Product from "./components/Product";
import Products from "./pages/Products";
import About from "./pages/About";
import Orders from "./pages/Orders";
import ProductDetails from "./pages/ProductDeatils";
function App() {
  const user = UserAuth();
  return (
    <div className="appContainer">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
          <Route path="/signin" element={<Signin />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/account"
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route
            path="/donate"
            element={
              <Protected>
                <Donate />
              </Protected>
            }
          />
          <Route
            path="/Orders"
            element={
              <Protected>
                <Orders />
              </Protected>
            }
          />
          <Route path="/About" element={<About />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
