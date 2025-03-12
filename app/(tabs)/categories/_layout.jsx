// import { Stack } from "expo-router";

// export default function CategoriesLayout() {
//   return (
//     <Stack
//       screenOptions={{
//         headerShown: false,
//         animation: "fade",
//         contentStyle: { backgroundColor: "#0D0D0D" }, // Keeps dark theme consistent
//         detachPreviousScreen: false,
//         presentation: "transparentModal",
//         gestureEnabled: false,
//       }}
//     />
//   );
// }

import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerTitle: "Categories", headerBackTitle: "Back" ,headerShown:false}} />
  );
}
