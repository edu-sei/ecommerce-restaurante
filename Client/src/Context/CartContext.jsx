import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [people, setPeople] = useState(1);
  const limit = 4 * people;

  const addToCart = (product) => {
    const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0);
    if (totalItems >= limit) {
      alert(`Max ${limit} items (${people} person/s)`);
      return;
    }

    const existing = cart.find((p) => p.id === product.id);
    if (existing) {
      setCart(
        cart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((p) => p.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, people, setPeople }}
    >
      {children}
    </CartContext.Provider>
  );
};
