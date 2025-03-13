import { useEffect, useState, useCallback } from "react";
import { Stack, useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { ActivityIndicator, View } from "react-native";

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

  return (
    <View style={{ flex: 1, backgroundColor: "#121212" }}>
      <Stack screenOptions={{ headerShown: false, animation: "fade", contentStyle: { backgroundColor: "transparent" } }}>
        <Stack.Screen name="login" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="signup" />
      </Stack>
    </View>
  );
};

export default RootLayout;
