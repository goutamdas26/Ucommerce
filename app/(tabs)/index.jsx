import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* 🔍 Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#fff" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for products..."
          placeholderTextColor="#B0B0B0"
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* 🏷️ Categories */}
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
        >
          {["Shoes", "Watches", "Mobiles", "Laptops", "Fashion"].map(
            (item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.categoryCard}
                onPress={() => router.push(`display-products/${item}`)}
              >
                <Text style={styles.categoryText}>{item}</Text>
              </TouchableOpacity>
            )
          )}
        </ScrollView>

        {/* 🎁 Offers Banner */}
        <Text style={styles.sectionTitle}>Exclusive Offers</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.bannerScroll}
        >
          {[1, 2, 3].map((item, index) => (
            <Image
              key={index}
              source={{
                uri: "https://res.cloudinary.com/dl92zh3w0/image/upload/v1740472730/cld-sample-5.jpg",
              }}
              style={styles.bannerImage}
            />
          ))}
        </ScrollView>

        {/* 🛍️ Featured Products */}
        <Text style={styles.sectionTitle}>Trending Products</Text>
        <View style={styles.productGrid}>
          {[1, 2, 3, 4].map((item, index) => (
            <TouchableOpacity key={index} style={styles.productCard} >
              <Image
                source={{
                  uri: "https://res.cloudinary.com/dl92zh3w0/image/upload/v1740472730/cld-sample-5.jpg",
                }}
                style={styles.productImage}
              />
              <Text style={styles.productName}>Luxury Item</Text>
              <Text style={styles.productPrice}>₹1999</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080808", // Deep dark black
    paddingHorizontal: 15,
    paddingTop: 50,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 25,
    padding: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#FFFFFF",
  },
  searchInput: {
    flex: 1,
    color: "#fff",
    marginLeft: 10,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textShadowColor: "rgba(255, 255, 255, 1)", // White neon glow
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  categoryScroll: {
    marginBottom: 20,
  },
  categoryCard: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#FFFFFF",
  },
  categoryText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textShadowColor: "rgba(255, 255, 255, 1)", // White neon glow
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  },
  bannerScroll: {
    marginBottom: 20,
  },
  bannerImage: {
    width: 300,
    height: 150,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    margin:5
  },
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productCard: {
    width: "48%",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FFFFFF",
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFFFFF",
  },
  productName: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 5,
    textShadowColor: "rgba(255, 255, 255, 1)", // White neon glow
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  },
  productPrice: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
    textShadowColor: "rgba(255, 255, 255, 1)", // White neon glow
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
});
