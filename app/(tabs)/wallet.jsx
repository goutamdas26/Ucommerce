import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { WalletContext } from "../../src/contexts/AuthContext";

const WalletScreen = () => {

  const [cashbackEarned, setCashbackEarned] = useState(1500);
  const { walletBalance, fetchBalance ,cashBack}=useContext(WalletContext)

  const transactions = [
    {
      id: "1",
      type: "Credit",
      amount: 1000,
      date: "Mar 1, 2025",
      referrer: "Rahul Sharma",
    },
    {
      id: "2",
      type: "Debit",
      amount: 500,
      date: "Feb 28, 2025",
      referrer: null,
    },
    {
      id: "3",
      type: "Credit",
      amount: 2000,
      date: "Feb 25, 2025",
      referrer: "Amit Verma",
    },
    {
      id: "4",
      type: "Debit",
      amount: 1000,
      date: "Feb 20, 2025",
      referrer: null,
    },
  ];
useEffect(()=>{
fetchBalance()
},[])
  return (
    <View style={styles.container}>
      {/* Wallet Balance Section */}
      <View style={styles.walletContainer}>
        <Text style={styles.walletTitle}>Wallet Balance</Text>
        <Text style={styles.walletAmount}>₹{walletBalance}</Text>
      </View>

      {/* Cashback Earned Section */}
      <View style={styles.cashbackContainer}>
        <Text style={styles.cashbackTitle}>💸 Cashback Earned</Text>
        <Text style={styles.cashbackAmount}>₹{cashBack}</Text>
      </View>

      {/* Buttons for Add Money & Withdraw */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addMoneyButton}>
          <Text style={styles.buttonText}>➕ Add Money</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.withdrawButton}>
          <Text style={styles.buttonText}>💳 Withdraw</Text>
        </TouchableOpacity>
      </View>

      {/* Transaction History */}
      <Text style={styles.sectionTitle}>📜 Transaction History</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.transactionItem,
              item.type === "Credit" ? styles.credit : styles.debit,
            ]}
          >
            <Text style={styles.transactionText}>
              {item.type === "Credit" ? "➕ Credited" : "➖ Debited"} ₹
              {item.amount}
            </Text>
            {item.referrer && (
              <Text style={styles.referrerText}>From: {item.referrer}</Text>
            )}
            <Text style={styles.transactionDate}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    padding: 20,
    paddingTop: 50,
  },
  walletContainer: {
    backgroundColor: "#1A1A1A",
    padding: 25,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    elevation: 5,
  },
  walletTitle: {
    color: "#B0B0B0",
    fontSize: 16,
  },
  walletAmount: {
    color: "#1E90FF",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 5,
  },
  cashbackContainer: {
    backgroundColor: "#122D14",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    elevation: 5,
  },
  cashbackTitle: {
    color: "#B0B0B0",
    fontSize: 16,
  },
  cashbackAmount: {
    color: "#00C853",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  addMoneyButton: {
    backgroundColor: "#1E90FF",
    padding: 15,
    borderRadius: 12,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
    shadowColor: "#1E90FF",
    elevation: 5,
  },
  withdrawButton: {
    backgroundColor: "#FF4D4D",
    padding: 15,
    borderRadius: 12,
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
    shadowColor: "#FF4D4D",
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  sectionTitle: {
    color: "#1E90FF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  transactionItem: {
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "#000",
    elevation: 5,
  },
  credit: {
    backgroundColor: "#122D14",
  },
  debit: {
    backgroundColor: "#3D1414",
  },
  transactionText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  referrerText: {
    color: "#00C853",
    fontSize: 14,
    marginTop: 5,
  },
  transactionDate: {
    color: "#B0B0B0",
    fontSize: 14,
    marginTop: 5,
  },
});
