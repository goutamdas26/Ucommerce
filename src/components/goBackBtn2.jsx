import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const GoBackButton2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()} activeOpacity={0.7}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default GoBackButton2;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10, 
    left: 10, 
    zIndex: 10, // Ensure it's above other elements
    pointerEvents: "box-none", // Allows touch events to pass through other parts of the container
  },
  button: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 12,
    borderRadius: 50,
    elevation: 5, // Adds shadow on Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
