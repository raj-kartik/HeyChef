// useCart.js
import { useState } from 'react';

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = (item) => {
    if (isItemInCart(item.id)) {
      removeFromCart(item.id);
    } else {
      addToCart(item);
    }
  };

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, { ...item, inCart: true }]);
    console.log("item added",item);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem.id !== itemId)
      );
      console.log("item removed",itemId)
  };

  const isItemInCart = (itemId) => {
    return cartItems.some((item) => item.id === itemId);
  };

  return {
    cartItems,
    toggleCart,
    isItemInCart,
  };
};

export default useCart;
