import { AuthProvider, CartProvider, OrderProvider, WalletProvider, WishlistProvider,ProductProvider } from "../contexts/AuthContext";

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
        <ProductProvider>

      <CartProvider>
        <OrderProvider>
          <WalletProvider>
            <WishlistProvider>{children}</WishlistProvider>
          </WalletProvider>
        </OrderProvider>
      </CartProvider>
      </ProductProvider>

    </AuthProvider>
  );
};

export default AppProvider;
