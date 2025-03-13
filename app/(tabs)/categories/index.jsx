import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";
import { useNavigation } from "@react-navigation/native";

const categories = [
  { id: "1", category: "Mobiles", image: "https://source.unsplash.com/100x100/?smartphone" },
  { id: "2", category: "Laptops", image: "https://source.unsplash.com/100x100/?laptop" },
  { id: "3", category: "Watches", image: "https://source.unsplash.com/100x100/?watch" },
  { id: "4", category: "Fashion", image: "https://source.unsplash.com/100x100/?fashion" },
  { id: "5", category: "Shoes", image: "https://source.unsplash.com/100x100/?shoes" },
  { id: "6", category: "Accessories", image: "https://source.unsplash.com/100x100/?accessories" },
];

const CategoriesScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.categoryCard}
            onPress={() =>
              router.push({
                pathname: `/categories/${item.category}`,
                params: { product: JSON.stringify(item) },
              })
            }
          >
            <Image source={{ uri: item.image }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.category}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D", // Deep black background
    padding: 20,
    paddingTop: 50,
  },
  header: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    textTransform: "uppercase",
    textShadowColor: "#FFFFFF",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8, // White neon glow
  },
  listContainer: {
    paddingBottom: 20,
  },
  categoryCard: {
    flex: 1,
    backgroundColor: "#1A1A1A", // Dark card
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)", // Subtle neon outline
    shadowColor: "#FFFFFF", // White neon glow effect
    shadowOpacity: 0.8,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
  },
  categoryImage: {
    width: 90,
    height: 90,
    borderRadius: 15,
    marginBottom: 12,
  },
  categoryText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textShadowColor: "#FFFFFF",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8, // White neon glow effect
  },
});
