import { useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await SecureStore.getItemAsync("userToken"); 
      setIsAuthenticated(!!token); // If token exists, user is authenticated
    };

    checkAuth();
  }, []);

  return { isAuthenticated };
}
