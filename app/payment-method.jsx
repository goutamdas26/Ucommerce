import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from "react-native";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import GoBackButton from "../src/components/goBackBtn";
import GoBackButton2 from "../src/components/goBackBtn2";

const PaymentMethodsScreen = () => {
    const router=useRouter()
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: "1",
      name: "UPI - 1234567890@ybl",
      type: "UPI",
      icon: <FontAwesome name="bank" size={24} color="#fff" />,
    },
    {
      id: "2",
      name: "Visa - **** 5678",
      type: "Card",
      icon: <Ionicons name="card-outline" size={24} color="#fff" />,
    },
    {
      id: "3",
      name: "Paytm Wallet",
      type: "Wallet",
      icon: (
        <MaterialIcons name="account-balance-wallet" size={24} color="#fff" />
      ),
    },
  ]);

  // Remove Payment Method
  const removeMethod = (id) => {
    Alert.alert(
      "Remove Payment Method",
      "Are you sure you want to remove this?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Remove",
          onPress: () =>
            setPaymentMethods(paymentMethods.filter((item) => item.id !== id)),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <GoBackButton2/>
      <Text style={styles.title}>Saved Payment Methods</Text>

      {/* Payment Methods List */}
      <FlatList
        data={paymentMethods}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.paymentOption}>
            {item.icon}
            <Text style={styles.optionText}>{item.name}</Text>
            <TouchableOpacity onPress={() => removeMethod(item.id)}>
              <Ionicons name="trash-outline" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Add Payment Method Button */}
      <TouchableOpacity style={styles.addButton} onPress={()=>router.push('/add-new-payment')}>
        <Ionicons name="add-circle-outline" size={24} color="#fff" />
        <Text style={styles.addButtonText}>Add New Payment Method</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentMethodsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    paddingHorizontal:10,
    paddingVertical:5
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  paymentOption: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 15,
    borderRadius: 15,
    marginVertical: 10,
    justifyContent: "space-between",
  },
  optionText: {
    color: "#fff",
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  addButton: {
    flexDirection: "row",
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
