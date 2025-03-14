import { useEffect, useState, useCallback } from "react";
import { Stack, useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { ActivityIndicator, StatusBar, View } from "react-native";
import AppProvider  from "../src/contexts/AppProvider"
const RootLayout = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  // Memoized Auth Check
  const checkAuth = useCallback(async () => {
    try {
      const token = await SecureStore.getItemAsync("userToken");
      setIsAuthenticated(!!token);
    } catch (error) {
      console.error("Error fetching token:", error);
      setIsAuthenticated(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (isAuthenticated === null) return;

    if (isAuthenticated) {
      router.replace("(tabs)");
    } else {
      router.replace("/login");
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#121212" }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  // return (
  //   <View style={{ flex: 1, backgroundColor: "#121212" }}>
  //     <Stack screenOptions={{ headerShown: false, animation: "fade", contentStyle: { backgroundColor: "transparent" } }}>
  //       <Stack.Screen name="login" />
  //       <Stack.Screen name="(tabs)" />
  //       <Stack.Screen name="signup" />
  //     </Stack>
  //   </View>
  // );
  return (
    <AppProvider>
      <StatusBar style="light" backgroundColor="black" translucent />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#0D0D0D" },
          headerTintColor: "#fff",
          contentStyle: { backgroundColor: "#0D0D0D" },
          headerShown:false
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="edit-profile" options={{ title: "Edit Profile" }} />
        <Stack.Screen name="payment-method" options={{ title: "Payment Method" }} />
        <Stack.Screen name="add-new-payment" options={{ title: "Add Payment Method" }} />
        <Stack.Screen name="wishlist" options={{ title: "Wishlists" }} />
        <Stack.Screen name="orders" options={{ title: "Orders" }} />
        <Stack.Screen name="help-center" options={{ title: "Help Support" }} />
        <Stack.Screen name="user-coupons" options={{ title: "Coupons" }} />
        <Stack.Screen name="login" options={{ title: "Login", headerShown: false }} />
        <Stack.Screen name="signup" options={{ title: "Signup", headerShown: false }} />
      </Stack>
    </AppProvider>
  );
};

export default RootLayout;
