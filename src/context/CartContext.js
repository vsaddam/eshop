import React, { useEffect } from 'react';
import { createContext, useContext, useReducer } from 'react';
import reducer from '../reducer/CartReducer';

const CartProvider = createContext();
const getCartData = () => {
   let localCartData = localStorage.getItem('E-Shop Store');
   if (localCartData === null) {
      return []
   } else {
      return JSON.parse(localCartData);
   }
}
const initialState = {
   // cart: [],
   cart: getCartData(),
   total_item: 0,
   total_price: '',
   shipping_fee: 20,
}
const CartContext = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);

   // addToCart functionality
   const addToCart = (id, color, quantity, product) => {
      dispatch({ type: 'ADD_TO_CART', payload: { id, color, quantity, product } });
   }

   // remove cart item functionality
   const RemoveItem = (id) => {
      dispatch({ type: 'REMOVE_ITEM', payload: id });
   }

   // clear cart
   const ClearCart = () => {
      dispatch({ type: 'CLEAR_CART' });
   }

   // setDecrement functionality
   const decrement = (id) => {
      dispatch({ type: "SET_DECREMENT", payload: id });
   }

   // setIncrement functionality
   const increment = (id) => {
      dispatch({ type: "SET_INCREMENT", payload: id });
   }

   useEffect(() => {
      dispatch({ type: "CART_TOTAL_ITEMS" });
      dispatch({ type: "CART_ORDER_TOTAL" });
      localStorage.setItem('E-Shop Store', JSON.stringify(state.cart));
   }, [state.cart]);

   return (
      <CartProvider.Provider value={{ ...state, addToCart, RemoveItem, ClearCart, decrement, increment }}>
         {children}
      </CartProvider.Provider>
   )
}

const useAddToCart = () => {
   return useContext(CartProvider);
}

export { CartContext, useAddToCart }