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
        {/* 🏷️ Categories Section */}
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
                onPress={() => navigation.navigate("")} 
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
                uri: "https://th.bing.com/th/id/OIP.yjSbZJfj8V3T6Nub4Cv97wHaEy?rs=1&pid=ImgDetMain",
              }}
              style={styles.bannerImage}
            />
          ))}
        </ScrollView>

        {/* 🛍️ Featured Products */}
        <Text style={styles.sectionTitle}>Trending Products</Text>
        <View style={styles.productGrid}>
          {[1, 2, 3, 4].map((item, index) => (
            <View key={index} style={styles.productCard}>
              <Image
                source={{
                  uri: "https://th.bing.com/th/id/OIP.yjSbZJfj8V3T6Nub4Cv97wHaEy?rs=1&pid=ImgDetMain",
                }}
                style={styles.productImage}
              />
              <Text style={styles.productName}>Luxury Item</Text>
              <Text style={styles.productPrice}>₹1999</Text>
            </View>
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
    backgroundColor: "#121212",
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
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    color: "#fff",
    marginLeft: 10,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  categoryScroll: {
    marginBottom: 20,
  },
  categoryCard: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  categoryText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  bannerScroll: {
    marginBottom: 20,
  },
  bannerImage: {
    width: 300,
    height: 150,
    borderRadius: 15,
    marginRight: 10,
  },
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productCard: {
    width: "48%",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productName: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 5,
  },
  productPrice: {
    color: "#FF4081",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 2,
  },
});
