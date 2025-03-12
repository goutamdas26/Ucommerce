import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      {/* Status Bar with Black Background & Light Theme */}
      <StatusBar style="light" backgroundColor="black" translucent />

      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#0D0D0D" },
          headerTintColor: "#fff",
          contentStyle: { backgroundColor: "#0D0D0D" },
        }}
      >
        {/* Tab Screens (Main Layout) */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* Other Screens */}
        <Stack.Screen name="edit-profile" options={{ title: "Edit Profile" }} />
        <Stack.Screen
          name="payment-method"
          options={{ title: "Payment Method" }}
        />
        <Stack.Screen
          name="add-new-payment"
          options={{ title: "Add Payment Method" }}
        />
        <Stack.Screen name="wishlist" options={{ title: "Wishlists" }} />
        <Stack.Screen name="orders" options={{ title: "Orders" }} />
      </Stack>
    </>
  );
}
