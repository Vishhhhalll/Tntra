import { useState, useEffect } from "react";

const useAddToCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || []; // get cart data from localstorage
    setCartItems(storedCart);
  }, []);

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, // total cost of product
    0
  );

  const removeItem = (id) => {
    const updateCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updateCartItems);
    localStorage.setItem("cart", JSON.stringify(updateCartItems));
  };

  const increaseQuantity = (id) => {
    const updateCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updateCartItems);
    localStorage.setItem("cart", JSON.stringify(updateCartItems));
  };

  const decreaseQuantity = (id) => {
    const updateCartItems = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updateCartItems);
    localStorage.setItem("cart", JSON.stringify(updateCartItems));
  };
  return [
    { cartItems },
    { totalCost, removeItem, increaseQuantity, decreaseQuantity },
  ];
};

export default useAddToCart;
