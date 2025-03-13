import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import GoBackButton from "../src/components/goBackBtn";
import GoBackButton2 from "../src/components/goBackBtn2";

const ReferredUsers = () => {
  const [referredUsers, setReferredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalCashback, setTotalCashback] = useState(0); // Mock cashback

  useEffect(() => {
    const fetchReferredUsers = async () => {
      try {
        // Simulating API response
        const mockData = [
          { id: "1", name: "Rahul Sharma", referredDate: "2025-02-20", cashback: 50 },
          { id: "2", name: "Priya Verma", referredDate: "2025-02-22", cashback: 30 },
          { id: "3", name: "Amit Kumar", referredDate: "2025-03-01", cashback: 40 },
        ];
        setReferredUsers(mockData);
        
        // Calculate total cashback earned
        const cashbackTotal = mockData.reduce((acc, user) => acc + user.cashback, 0);
        setTotalCashback(cashbackTotal);
      } catch (error) {
        console.log("Error fetching referred users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReferredUsers();
  }, []);

  return (
    <View style={styles.container}>
        
      <Text style={styles.title}>👥 Referred Users</Text>
<GoBackButton2/>
      {/* Summary Card */}
      <View style={styles.summaryCard}>
        <Text style={styles.summaryText}>Total Referred: {referredUsers.length}</Text>
        <Text style={styles.summaryText}>Total Cashback: ₹{totalCashback}</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#1E90FF" />
      ) : referredUsers.length > 0 ? (
        <FlatList
          data={referredUsers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.userItem}>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.referredDate}>Referred on: {item.referredDate}</Text>
              <Text style={styles.cashback}>Cashback Earned: ₹{item.cashback}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noUsersText}>No referred users yet.</Text>
      )}
    </View>
  );
};

export default ReferredUsers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    padding: 20,
    
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1E90FF",
    marginBottom: 15,
    textAlign:"center"
  },
  summaryCard: {
    backgroundColor: "#1A1A1A",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    elevation: 3,
  },
  summaryText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  userItem: {
    backgroundColor: "#1A1A1A",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    elevation: 3,
  },
  userName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  referredDate: {
    color: "#888",
    fontSize: 14,
    marginTop: 5,
  },
  cashback: {
    color: "#FFD700",
    fontSize: 14,
    marginTop: 5,
    fontWeight: "bold",
  },
  noUsersText: {
    color: "#888",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});
