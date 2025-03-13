import React, { createContext, useState } from "react";
import axios from "axios";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const placeOrder = async (cart, totalAmount) => {
    try {
      const { data } = await axios.post("https://yourapi.com/api/orders", {
        products: cart,
        totalAmount,
      });
      setOrders((prev) => [...prev, data]);
    } catch (error) {
      console.error("Order failed:", error);
    }
  };

  return (
    <OrderContext.Provider value={{ orders, placeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
