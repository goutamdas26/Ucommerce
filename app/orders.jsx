import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';

const orderData = [
  { id: '1', item: 'Luxury Watch', price: '₹5000', status: 'Delivered' },
  { id: '2', item: 'Designer Shoes', price: '₹8000', status: 'Pending' },
  { id: '3', item: 'Smartphone', price: '₹30000', status: 'Cancelled' },
];

const Orders = () => {
  const renderOrderItem = ({ item }) => (
    <View style={styles.orderCard}>
      <Text style={styles.itemName}>{item.item}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <Text style={styles.itemStatus}>{item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Orders</Text>
      <FlatList
        data={orderData}
        keyExtractor={(item) => item.id}
        renderItem={renderOrderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  header: {
    color: '#FFD700',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  orderCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    elevation: 10,
    backdropFilter: 'blur(10px)',
  },
  itemName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    color: '#B0B0B0',
    fontSize: 16,
  },
  itemStatus: {
    color: '#FF4D4D',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

// No new order functionality is implemented in this file.
export default Orders