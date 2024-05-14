import { useState, useEffect } from "react";

const useCheckOut = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const click = () => {
    localStorage.removeItem("cart");
  };
  return [{ cartItems }, { totalCost, click }];
};

export default useCheckOut;
