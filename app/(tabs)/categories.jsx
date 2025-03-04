import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import laptopImage from '../../assets/images/laptop.png'
const categories = [
  {
    id: "1",
    name: "Mobiles",
    image: "https://source.unsplash.com/100x100/?smartphone",
  },
  {
    id: "2",
    name: "Laptops",
    image: "https://source.unsplash.com/100x100/?laptop",
  },
  {
    id: "3",
    name: "Watches",
    image: "https://source.unsplash.com/100x100/?watch",
  },
  {
    id: "4",
    name: "Fashion",
    image: "https://source.unsplash.com/100x100/?fashion",
  },
  {
    id: "5",
    name: "Shoes",
    image: "https://source.unsplash.com/100x100/?shoes",
  },
  {
    id: "6",
    name: "Accessories",
    image: "https://source.unsplash.com/100x100/?accessories",
  },
];

const CategoriesScreen = () => {
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
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              source={laptopImage}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryText}>{item.name}</Text>
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
    backgroundColor: "#0D0D0D",
    padding: 15,
    paddingTop: 50,
  },
  header: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  categoryCard: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    margin: 8,
    elevation: 5,
    shadowColor: "#000",
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginBottom: 10,
  
  },
  categoryText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});
