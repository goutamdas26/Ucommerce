import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const wishlistItems = [
  { id: '1', name: 'Luxury Watch', price: '₹5000' },
  { id: '2', name: 'Designer Shoes', price: '₹8000' },
  { id: '3', name: 'Smartphone', price: '₹30000' },
];

const Wishlist = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Wishlist</Text>
      <FlatList
        data={wishlistItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        )}
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
  itemCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    elevation: 5,
  },
  itemName: {
    color: '#fff',
    fontSize: 18,
  },
  itemPrice: {
    color: '#B0B0B0',
    fontSize: 16,
  },
});

export default Wishlist;