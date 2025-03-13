
import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
      }
    };
    loadUserData();
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await axios.post("https://yourapi.com/api/auth/login", {
        email,
        password,
      });
      setUser(data.user);
      setToken(data.token);
      await AsyncStorage.setItem("token", data.token);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logout = async () => {
    setUser(null);
    setToken(null);
    await AsyncStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
