import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useLocalSearchParams, router } from "expo-router";
import GoBackButton from "../../../../src/components/goBackBtn";
import GoBackButton2 from "../../../../src/components/goBackBtn2";

const DisplayProduct = () => {
  const { id } = useLocalSearchParams(); // Get product ID from route
  const { productData } = useLocalSearchParams();
  const product = productData ? JSON.parse(productData) : {};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Product Image */}
      <Image source={{ uri: product.image }} style={styles.image} />
      <GoBackButton2/>

      {/* Product Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>₹{product.price}</Text>
        <Text style={styles.productRating}>⭐ {product.rating} / 5</Text>
        <Text style={styles.productDiscount}>🔥 {product.discount}% OFF</Text>

        {/* Buy & Wishlist Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wishlistButton}>
            <Text style={styles.buttonText}>Add to Wishlist</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Recommended Products */}
      <Text style={styles.recommendedTitle}>Recommended Products</Text>
      {product.recommendedProducts && product.recommendedProducts.length > 0 && (
        <View style={styles.recommendedContainer}>
          {product.recommendedProducts.map((item, index) => (
            <View key={index} style={styles.recommendedItem}>
              <Image source={{ uri: item.image }} style={styles.recommendedImage} />
              <Text style={styles.recommendedName}>{item.name}</Text>
              <Text style={styles.recommendedPrice}>₹{item.price}</Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#1E1E1E",
    padding: 0,
    alignItems: "center",
    top:30
  },
  image: {
    width: "100%",
    height: 350,
    borderRadius: 0,
    marginBottom: 20,
  },
  detailsContainer: {
    width: "100%",
    backgroundColor: "#2A2A2A",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  productName: {
    color: "#FFD700",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productPrice: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "600",
  },
  productRating: {
    color: "#FFD700",
    fontSize: 18,
    marginTop: 5,
  },
  productDiscount: {
    color: "#FF5733",
    fontSize: 18,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buyButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  wishlistButton: {
    backgroundColor: "#FF5733",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    color: "#1E1E1E",
    fontSize: 16,
    fontWeight: "bold",
  },
  recommendedTitle: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 25,
    alignSelf: "flex-start",
  },
  recommendedContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 10,
  },
  recommendedItem: {
    width: 120,
    margin: 8,
    alignItems: "center",
    backgroundColor: "#2A2A2A",
    padding: 10,
    borderRadius: 10,
  },
  recommendedImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  recommendedName: {
    color: "#FFD700",
    fontSize: 14,
    marginTop: 5,
    textAlign: "center",
  },
  recommendedPrice: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default DisplayProduct;
