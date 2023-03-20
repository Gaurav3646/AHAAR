import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Protected from "./components/Protected";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import "./index.css";
import ImageScroller from "./components/ImageSlider";
import Donate from "./pages/Donate";
function App() {
  return (
    <div className="appContainer">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/account"
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
