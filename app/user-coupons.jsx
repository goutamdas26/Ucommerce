import { View, Text, FlatList, StyleSheet, TouchableOpacity, ToastAndroid } from "react-native";
import { useState } from "react";
import * as Clipboard from "expo-clipboard";
import { LinearGradient } from "expo-linear-gradient";

const MyCoupons = () => {
  const [coupons, setCoupons] = useState([
    { id: "1", code: "SAVE10", discount: "10% OFF", expiry: "30 Mar 2025" },
    { id: "2", code: "FREESHIP", discount: "Free Shipping", expiry: "15 Apr 2025" },
    { id: "3", code: "WELCOME50", discount: "₹50 OFF", expiry: "10 May 2025" },
  ]);

  const copyToClipboard = (code) => {
    Clipboard.setStringAsync(code);
    ToastAndroid.show(`Copied: ${code}`, ToastAndroid.SHORT);
  };

  return (
    <LinearGradient colors={["#0D0D0D", "#1C1C1E"]} style={styles.container}>
      <Text style={styles.title}>My Coupons</Text>
      {coupons.length > 0 ? (
        <FlatList
          data={coupons}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => copyToClipboard(item.code)} activeOpacity={0.7}>
              <LinearGradient colors={["#222", "#333"]} style={styles.couponCard}>
                <Text style={styles.couponCode}>{item.code}</Text>
                <Text style={styles.discount}>{item.discount}</Text>
                <Text style={styles.expiry}>Expires on: {item.expiry}</Text>
                <Text style={styles.tapToCopy}>Tap to copy</Text>
              </LinearGradient>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={styles.noCoupons}>No coupons available</Text>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
    textAlign: "center",
    textTransform: "uppercase",
  },
  couponCard: {
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#444",
    shadowColor: "#00E6E6",
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  couponCode: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFD700",
    textTransform: "uppercase",
  },
  discount: {
    fontSize: 16,
    color: "#0AF5F5",
    marginTop: 5,
    fontWeight: "500",
  },
  expiry: {
    fontSize: 14,
    color: "#AAA",
    marginTop: 5,
  },
  tapToCopy: {
    fontSize: 12,
    color: "#888",
    marginTop: 8,
    fontStyle: "italic",
    textAlign: "right",
  },
  noCoupons: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 50,
    color: "#777",
  },
});

export default MyCoupons;
