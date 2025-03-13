import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import GoBackButton2 from '../../src/components/goBackBtn2';


const products = {
  Mobiles: [
    { id: '1', name: 'iPhone 15', price: 1299, image: 'https://res.cloudinary.com/dl92zh3w0/image/upload/v1740472730/cld-sample-5.jpg', rating: 4, discount: 10 },
    { id: '2', name: 'Samsung Galaxy S21', price: 999, image: 'https://res.cloudinary.com/dl92zh3w0/image/upload/v1740472730/cld-sample-5.jpg', rating: 2, discount: 5 },
    { id: '3', name: 'OnePlus 9', price: 749, image: 'https://res.cloudinary.com/dl92zh3w0/image/upload/v1740472730/cld-sample-5.jpg', rating: 4.5, discount: 12 },
  ],
  Laptops: [
    { id: '4', name: 'MacBook Air', price: 999, image: 'https://res.cloudinary.com/dl92zh3w0/image/upload/v1740472730/cld-sample-5.jpg', rating: 5, discount: 15 },
    { id: '5', name: 'Dell XPS 13', price: 1099, image: 'https://res.cloudinary.com/dl92zh3w0/image/upload/v1740472730/cld-sample-5.jpg', rating: 4, discount: 10 },
    { id: '6', name: 'HP Spectre x360', price: 1199, image: 'https://res.cloudinary.com/dl92zh3w0/image/upload/v1740472730/cld-sample-5.jpg', rating: 4.5, discount: 12 },
  ],
};

const DisplayCategories = () => {
  const { category } = useLocalSearchParams();
  const categoryProducts = products[category] || [];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{category} Collection</Text>
      <GoBackButton2/>
      {categoryProducts.length > 0 ? (
        <FlatList
          data={categoryProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={()=>router.push({
              pathname: `categories/product/${item.id}`,
              params: { productData: JSON.stringify(item) }, // Convert object to string
            })}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={styles.noProducts}>No products found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    padding: 15,
    top: 20,
  },
  header: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: '#FFFFFF',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  card: {
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#FFFFFF',
    shadowOpacity: 0.8,
    shadowRadius: 15,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noProducts: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default DisplayCategories;
