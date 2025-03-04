import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: "#0D0D0D" }}>
      {/* Status Bar with Black Background & Light Theme */}
      <StatusBar style="light" backgroundColor="black" />

      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#0D0D0D" },
          headerTintColor: "#fff",
          contentStyle: { backgroundColor: "#0D0D0D" }, // 🔹 Ensures all screens have dark background
        }}
      >
        {/* Tab Screens (Main Layout) */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* Edit Profile Screen */}
        <Stack.Screen name="edit-profile" options={{ title: "Edit Profile" }} />
        <Stack.Screen
          name="payment-method"
          options={{ title: "Payment Method" }}
        />
        <Stack.Screen
          name="add-new-payment"
          options={{ title: "Add Payment Method" }}
        />
      </Stack>
    </View>
  );
}


    