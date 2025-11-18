import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  // Adds item to cart.
  const addToCart = (product, size) => {
    setCartItems((prev) => {
      // Generate a unique key based on ID + size (avoids collisions)
      const key = `${product.id}-${size}`;

      const existing = prev.find((item) => item.key === key);

      if (existing) {
        // Increase quantity if this exact item already exists
        return prev.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      // Otherwise add new item
      return [
        ...prev,
        {
          ...product,
          key,
          size,
          quantity: 1,
        },
      ];
    });
  };

  // Removes item from cart.
  const removeFromCart = (id, size) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size))
    );
  };

  // Updates quantity of item.
  const updateQuantity = (id, size, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id, size);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
