import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const DisplayProduct = () => {
  const route = useRoute();
  const { product } = route.params; 
console.log(product)
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
      <Text style={styles.productRating}>Rating: {product.rating} ⭐</Text>
      <Text style={styles.productDiscount}>Discount: {product.discount}%</Text>

      <Text style={styles.recommendedTitle}>Recommended Products:</Text>
      {/* {product.recommendedProducts.map((item, index) => (
        <View key={index} style={styles.recommendedItem}>
          <Image source={{ uri: item.image }} style={styles.recommendedImage} />
          <Text style={styles.recommendedName}>{item.name}</Text>
          <Text style={styles.recommendedPrice}>${item.price}</Text>
        </View>
      ))} */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#121212",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  productName: {
    color: "#FFD700",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
  },
  productPrice: {
    color: "#FFD700",
    fontSize: 24,
    textAlign: "left",
  },
  productRating: {
    color: "#FFD700",
    fontSize: 18,
    marginBottom: 5,
    textAlign: "left",
  },
  productDiscount: {
    color: "#FFD700",
    fontSize: 18,
    marginBottom: 20,
    textAlign: "left",
  },
  recommendedTitle: {
    color: "#FFD700",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "left",
  },
  recommendedItem: {
    alignItems: "center",
    marginBottom: 15,
  },
  recommendedImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  recommendedName: {
    color: "#FFD700",
    fontSize: 16,
    textAlign: "center",
  },
  recommendedPrice: {
    color: "#FFD700",
    fontSize: 14,
    textAlign: "center",
  },
});

export default DisplayProduct;
