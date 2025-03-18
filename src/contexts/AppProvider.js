import { AuthProvider, CartProvider, OrderProvider, WalletProvider, WishlistProvider,ProductProvider,TransactionProvider } from "../contexts/AuthContext";

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
        <ProductProvider>

      <CartProvider>
        <OrderProvider>
          <TransactionProvider>
          <WalletProvider>
            <WishlistProvider>{children}</WishlistProvider>
          </WalletProvider>
          </TransactionProvider>
        </OrderProvider>
      </CartProvider>
      </ProductProvider>

    </AuthProvider>
  );
};

export default AppProvider;
