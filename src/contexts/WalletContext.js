import React, { createContext, useState } from "react";
import axios from "axios";

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);

  const fetchBalance = async () => {
    try {
      const { data } = await axios.get("https://yourapi.com/api/wallet");
      setBalance(data.balance);
      console.log(data)
    } catch (error) {
      console.error("Failed to fetch wallet balance:", error);
    }
  };

  return (
    <WalletContext.Provider value={{ balance, fetchBalance }}>
      {children}
    </WalletContext.Provider>
  );
};
