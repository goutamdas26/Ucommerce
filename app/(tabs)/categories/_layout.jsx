import { Stack } from "expo-router";

export default function CategoriesLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Hide header
        animation: "fade", // Smooth transition effect
        contentStyle: { backgroundColor: "#0D0D0D" }, // Keeps dark theme
        detachPreviousScreen: false, // Prevents flickering when navigating
        presentation: "transparentModal", // Ensures smooth modal-like transition
        gestureEnabled: false, // Disables swipe gestures (if needed)
      }}
    />
  );
}
