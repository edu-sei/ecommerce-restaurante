import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";

import Home from "pages/Home/Home";
import Menu from "pages/Menu/Menu";
import Cart from "pages/Cart/Cart";
import Login from "pages/Account/Login/Login";
import Register from "pages/Account/Register/Register";
import Checkout from "pages/Checkout/Checkout";
import { AuthProvider } from "./Context/AuthContext";


function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router basename="/ecommerce-restaurante/">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Cart />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
