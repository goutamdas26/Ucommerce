import React, { useState } from "react";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import GoBackButton2 from "../src/components/goBackBtn2";

const products = [
  { id: "1", name: "Luxury Sneakers", category: "Sneakers", price: "$120", image: "https://via.placeholder.com/150" },
  { id: "2", name: "Designer Heels", category: "Heels", price: "$250", image: "https://via.placeholder.com/150" },
  { id: "3", name: "Premium Loafers", category: "Loafers", price: "$180", image: "https://via.placeholder.com/150" },
  { id: "4", name: "Running Shoes", category: "Sneakers", price: "$90", image: "https://via.placeholder.com/150" },
  { id: "5", name: "Casual Sandals", category: "Sandals", price: "$60", image: "https://via.placeholder.com/150" },
  { id: "6", name: "Formal Oxfords", category: "Oxfords", price: "$200", image: "https://via.placeholder.com/150" },
];

const BrowseProductsScreen = () => {
  const [search, setSearch] = useState("");

  // Filter products based on name or category
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#0A0A0A", paddingHorizontal: 16, paddingTop: 50 }}>
      
      {/* Header with Cart Icon */}
        <GoBackButton2/>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <Text style={{ color: "#fff", fontSize: 22, fontWeight: "bold" }}>Browse Products</Text>
        <TouchableOpacity onPress={()=>router.push("/cart")}>
          <Ionicons name="cart-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: 12,
          paddingHorizontal: 12,
          paddingVertical: 10,
          marginBottom: 20,
          borderWidth: 2,
          borderColor: "rgba(255, 255, 255, 0.6)",
        }}
      >
        <Ionicons name="search" size={20} color="#fff" style={{ marginRight: 10 }} />
        <TextInput
          style={{ flex: 1, color: "#fff", fontSize: 16 }}
          placeholder="Search by name or category..."
          placeholderTextColor="#ccc"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Product List */}
      <FlatList
  data={filteredProducts}
  keyExtractor={(item) => item.id}
  numColumns={2}
  contentContainerStyle={{ paddingBottom: 20 }}
  columnWrapperStyle={{ justifyContent: "space-between" }}
  renderItem={({ item }) => (
    <TouchableOpacity
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        marginBottom: 15,
        borderRadius: 15,
        padding: 15,
        borderWidth: 2,
        borderColor: "rgba(255, 255, 255, 0.7)",
        width: "48%",
        height: 230, // Fixed height
        alignItems: "center",
        justifyContent: "space-between", // Distributes space evenly
      }}
      onPress={() =>
        router.push({
          pathname: `display-products/${item.id}`,
          params: { productData: JSON.stringify(item) },
        })
      }
    >
      {/* Image */}
      <Image
        source={{ uri: item.image }}
        style={{ width: 100, height: 100, borderRadius: 10 }}
      />

      {/* Product Details - Flex container to adjust spacing */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold", textAlign: "center" }} numberOfLines={1} ellipsizeMode="tail">
          {item.name}
        </Text>
        <Text style={{ color: "#aaa", fontSize: 12, marginVertical: 5, textAlign: "center" }} numberOfLines={1} ellipsizeMode="tail">
          {item.category}
        </Text>
        <Text style={{ color: "#fff", fontSize: 14, fontWeight: "bold", textAlign: "center" }}>
          {item.price}
        </Text>
      </View>

      {/* Add to Cart Button */}
      <TouchableOpacity
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          paddingVertical: 6,
          paddingHorizontal: 16,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: "rgba(255, 255, 255, 0.6)",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 14 }}>Add to Cart</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )}
/>

    </View>
  );
};

export default BrowseProductsScreen;
