import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const GoBackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={24} color="#fff" />
    </TouchableOpacity>
  );
};

export default GoBackButton;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "rgba(0,0,0,0.6)", // Slight transparency for a modern look
    padding: 10,
    borderRadius: 50,
    elevation: 5, // Adds shadow on Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
