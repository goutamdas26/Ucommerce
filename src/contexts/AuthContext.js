import React, { createContext, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import Constants from "expo-constants";

const API_URL = Constants.expoConfig.extra.API_URL;
// Auth Context
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedToken = await SecureStore.getItemAsync("userToken");
        if (storedToken) {
          setToken(storedToken);
          axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
        }
      } catch (error) {
        console.error("Error loading token:", error);
      }
    };

    loadUserData();
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await axios.post(`${API_URL}/api/product`, { email, password });
      setUser(data.user);
      setToken(data.token);
      await SecureStore.setItemAsync("userToken", data.token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logout = async () => {
    try {
      setUser(null);
      setToken(null);
      await SecureStore.deleteItemAsync("userToken");
      delete axios.defaults.headers.common["Authorization"];
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return <AuthContext.Provider value={{ user, token, login, logout }}>{children}</AuthContext.Provider>;
};

// Cart Context
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item._id === product._id);
      if (existing) {
        return prevCart.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item._id === productId ? { ...item, quantity } : item))
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Order Context
export const OrderContext = createContext();
export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const placeOrder = async (cart, totalAmount) => {
    try {
      const { data } = await axios.post(
        "https://yourapi.com/api/orders",
        { products: cart, totalAmount },
        { headers: { Authorization: `Bearer ${SecureStore.getItemAsync("userToken")}` } }
      );
      setOrders((prev) => [...prev, data]);
    } catch (error) {
      console.error("Order failed:", error);
    }
  };

  return <OrderContext.Provider value={{ orders, placeOrder }}>{children}</OrderContext.Provider>;
};

// Wallet Context
export const WalletContext = createContext();
export const WalletProvider = ({ children }) => {
  const [walletBalance, setWalletBalance] = useState(0);
  const [cashBack, setCashBack] = useState(0);

  const fetchBalance = async () => {
    try {

      const userEmail=await SecureStore.getItemAsync("userEmail")
      const token = await SecureStore.getItemAsync("userToken");
      console.log(userEmail)
      const { data } = await axios.get(`${API_URL}/api/wallet/user/${userEmail}`);
      setWalletBalance(data.balance);
      setCashBack(data.cashback);
    } catch (error) {
      console.error("Failed to fetch wallet balance:", error);
    }
  };

  return <WalletContext.Provider value={{ walletBalance, fetchBalance ,cashBack}}>{children}</WalletContext.Provider>;
};

// Wishlist Context
export const WishlistContext = createContext();
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    setWishlist((prev) => [...prev, product]);
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((item) => item._id !== productId));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
// Product Context
export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [categoryProduct, setCategoryProduct] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/product`);
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };
  const getCategoryList = async (cat) => {
    try {
      const { data } = await axios.get(`${API_URL}/api/product/categorylist`);
      setCategoryList(data)
    
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };
  const getCategoryProduct = async (cat) => {
    try {
      console.log(cat)
      const { data } = await axios.get(`${API_URL}/api/product/productbycat/${cat}`);
      setCategoryProduct(data)
    
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const addProduct = async (productData) => {
    try {
      const { data } = await axios.post("https://yourapi.com/api/products", productData, {
        headers: { Authorization: `Bearer ${await SecureStore.getItemAsync("userToken")}` },
      });
      setProducts((prev) => [...prev, data]);
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  const updateProduct = async (productId, updatedData) => {
    try {
      const { data } = await axios.put(`https://yourapi.com/api/products/${productId}`, updatedData, {
        headers: { Authorization: `Bearer ${await SecureStore.getItemAsync("userToken")}` },
      });
      setProducts((prev) => prev.map((p) => (p._id === productId ? data : p)));
    } catch (error) {
      console.error("Failed to update product:", error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`https://yourapi.com/api/products/${productId}`, {
        headers: { Authorization: `Bearer ${await SecureStore.getItemAsync("userToken")}` },
      });
      setProducts((prev) => prev.filter((p) => p._id !== productId));
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  return (
    <ProductContext.Provider value={{ products, fetchProducts, addProduct, updateProduct, deleteProduct ,getCategoryList,categoryList,getCategoryProduct,categoryProduct}}>
      {children}
    </ProductContext.Provider>
  );
};
