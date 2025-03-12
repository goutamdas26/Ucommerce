import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import laptopImage from "../../../assets/images/laptop.png";
import { router } from "expo-router";
import { useNavigation } from "@react-navigation/native";

const categories = [
  {
    id: "1",
    category: "Mobiles",
    image: "https://source.unsplash.com/100x100/?smartphone",
    rating:3,
    discount:5
  },
  {
    id: "2",
    category: "Laptops",
    image: "https://source.unsplash.com/100x100/?laptop",
    
  },
  {
    id: "3",
    category: "Watches",
    image: "https://source.unsplash.com/100x100/?watch",
  },
  {
    id: "4",
    category: "Fashion",
    image: "https://source.unsplash.com/100x100/?fashion",
  },
  {
    id: "5",
    category: "Shoes",
    image: "https://source.unsplash.com/100x100/?shoes",
  },
  {
    id: "6",
    category: "Accessories",
    image: "https://source.unsplash.com/100x100/?accessories",
  },
];

const CategoriesScreen = () => {
const navigation =useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Categories</Text>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.categoryCard}
            onPress={() => router.push({pathname:`/categories/${item.category}`,
              params: { product: JSON.stringify(item) }})}
          >
            <Image
              source={laptopImage} // Use the image from the category
              style={styles.categoryImage}
            />
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
    backgroundColor: "#121212", // Darker background for luxury feel
    padding: 20,
    paddingTop: 50,
  },
  header: {
    color: "#FFD700", // Gold color for luxury
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  listContainer: {
    paddingBottom: 20,
  },
  categoryCard: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 15,
    marginBottom: 10,
  },
  categoryText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});

// import { View, Text, Button } from "react-native";
// import { router } from "expo-router";

// export default function CategoryPage() {
//   return (
//     <View>
//       <Text>Categories</Text>
//       <Button title="View Product 101" onPress={() => router.push("/categories/101")} />
//     </View>
//   );
// }
