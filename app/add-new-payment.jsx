import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const AddPaymentMethodScreen = ({ navigation }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [inputValue, setInputValue] = useState("");
const router=useRouter()
  // Handle Save Payment Method
  const handleSave = () => {
    if (!selectedMethod || !inputValue.trim()) {
      Alert.alert("Error", "Please enter valid payment details.");
      return;
    }
    Alert.alert("Success", "Payment method added successfully!", [
      { text: "OK", onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Payment Method</Text>

      {/* Payment Method Selection */}
      <View style={styles.methodContainer}>
        <TouchableOpacity
          style={[
            styles.methodButton,
            selectedMethod === "UPI" && styles.selectedMethod,
          ]}
          onPress={() => setSelectedMethod("UPI")}
        >
          <FontAwesome name="bank" size={24} color="#fff" />
          <Text style={styles.methodText}>UPI</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.methodButton,
            selectedMethod === "Card" && styles.selectedMethod,
          ]}
          onPress={() => setSelectedMethod("Card")}
        >
          <Ionicons name="card-outline" size={24} color="#fff" />
          <Text style={styles.methodText}>Card</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.methodButton,
            selectedMethod === "Wallet" && styles.selectedMethod,
          ]}
          onPress={() => setSelectedMethod("Wallet")}
        >
          <MaterialIcons name="account-balance-wallet" size={24} color="#fff" />
          <Text style={styles.methodText}>Wallet</Text>
        </TouchableOpacity>
      </View>

      {/* Input Field Based on Selected Method */}
      {selectedMethod && (
        <TextInput
          style={styles.input}
          placeholder={
            selectedMethod === "UPI"
              ? "Enter UPI ID (e.g., 9876543210@ybl)"
              : selectedMethod === "Card"
              ? "Enter Card Number (e.g., 4111 1111 1111 1111)"
              : "Enter Wallet ID"
          }
          placeholderTextColor="#aaa"
          keyboardType={selectedMethod === "Card" ? "numeric" : "default"}
          value={inputValue}
          onChangeText={setInputValue}
        />
      )}

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Ionicons name="checkmark-circle-outline" size={24} color="#fff" />
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => router.back()}
        >
          <Ionicons name="close-circle-outline" size={24} color="#fff" />
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddPaymentMethodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  methodContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  methodButton: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    width: "30%",
  },
  selectedMethod: {
    backgroundColor: "#4CAF50",
  },
  methodText: {
    color: "#fff",
    marginTop: 8,
    fontSize: 14,
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "#fff",
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
  saveButton: {
    flexDirection: "row",
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
  },
  cancelButton: {
    flexDirection: "row",
    backgroundColor: "#D32F2F",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
