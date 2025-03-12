// import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
// import React from 'react';
// import { useRoute, useNavigation } from '@react-navigation/native';

// const products = {
//   Mobiles: [
//     { id: '1', name: 'iPhone 15', price: 1299, image: 'https://source.unsplash.com/100x100/?iphone', rating: 4, discount: 10 },
//     { id: '2', name: 'Samsung Galaxy S21', price: 999, image: 'https://source.unsplash.com/100x100/?samsung', rating: 2, discount: 5 },
//   ],
//   Laptops: [
//     { id: '3', name: 'MacBook Air', price: 999, image: 'https://source.unsplash.com/100x100/?laptop', rating: 5, discount: 15 },
//     { id: '4', name: 'Dell XPS 13', price: 1099, image: 'https://source.unsplash.com/100x100/?dell', rating: 4, discount: 10 },
//     { id: '5', name: 'HP Spectre x360', price: 1199, image: 'https://source.unsplash.com/100x100/?hp', rating: 4.5, discount: 12 },
//     { id: '6', name: 'Lenovo ThinkPad X1', price: 1399, image: 'https://source.unsplash.com/100x100/?lenovo', rating: 4.8, discount: 8 },
//   ],
//   // Add more categories and products as needed
// };

// const DisplayCategories = () => {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { category } = route.params; 
//   console.log(category);
//   const categoryProducts = products[category] || [];

//   return (
//     <View style={styles.container}>
//       <View style={styles.headerContainer}>
//         <TouchableOpacity
//           onPress={() => navigation.goBack()}
//           style={styles.backButton}
//         >
//           <Text style={styles.backButtonText}>Go Back</Text>
//         </TouchableOpacity>
//         <Text style={styles.header}>Products in {category}</Text>
//       </View>
//       {categoryProducts.length > 0 ? (
//         <FlatList
//           data={categoryProducts}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               style={styles.card}
//               onPress={() => navigation.navigate("display-product",{product:item})}
//             >
//               <Image source={{ uri: item.image }} style={styles.image} />
//               <Text style={styles.productName}>{item.name}</Text>
//               <Text style={styles.productPrice}>${item.price}</Text>
//             </TouchableOpacity>
//           )}
//         />
//       ) : (
//         <Text style={styles.noProducts}>
//           No products available in this category.
//         </Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop:15,
//     backgroundColor: '#121212',
//     padding: 20,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   backButton: {
//     padding: 10,
//     backgroundColor: '#FFD700',
//     borderRadius: 5,
//   },
//   backButtonText: {
//     color: '#000',
//     fontWeight: 'bold',
//   },
//   header: {
//     color: '#FFD700',
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     flex: 1,
//   },
//   card: {
//     backgroundColor: '#1A1A1A',
//     borderRadius: 15,
//     padding: 20,
//     marginVertical: 10,
//     alignItems: 'center',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   productName: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '700',
//   },
//   productPrice: {
//     color: '#FFD700',
//     fontSize: 14,
//   },
//   noProducts: {
//     color: '#fff',
//     fontSize: 18,
//     textAlign: 'center',
//     marginTop: 20,
//   },
// });

// export default DisplayCategories;

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";

const products = {
  Mobiles: [
    {
      id: "1",
      name: "iPhone 15",
      price: 1299,
      image: "https://source.unsplash.com/100x100/?iphone",
      rating: 4,
      discount: 10,
    },
    {
      id: "2",
      name: "Samsung Galaxy S21",
      price: 999,
      image: "https://source.unsplash.com/100x100/?samsung",
      rating: 2,
      discount: 5,
    },
  ],
  Laptops: [
    {
      id: "3",
      name: "MacBook Air",
      price: 999,
      image: "https://source.unsplash.com/100x100/?laptop",
      rating: 5,
      discount: 15,
    },
    {
      id: "4",
      name: "Dell XPS 13",
      price: 1099,
      image: "https://source.unsplash.com/100x100/?dell",
      rating: 4,
      discount: 10,
    },
    {
      id: "5",
      name: "HP Spectre x360",
      price: 1199,
      image: "https://source.unsplash.com/100x100/?hp",
      rating: 4.5,
      discount: 12,
    },
    {
      id: "6",
      name: "Lenovo ThinkPad X1",
      price: 1399,
      image: "https://source.unsplash.com/100x100/?lenovo",
      rating: 4.8,
      discount: 8,
    },
  ],
};

const DisplayCategories = () => {
  const { category } = useLocalSearchParams();
  const router = useRouter();
  const categoryProducts = products[category] || [];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
        <Text style={styles.header}>Products in {category}</Text>
      </View>
      {categoryProducts.length > 0 ? (
        <FlatList
          data={categoryProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                router.push({
                  pathname: "/display-product",
                  params: { product: JSON.stringify(item) },
                })
              }
            >
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={styles.noProducts}>
          No products available in this category.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    backgroundColor: "#121212",
    padding: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
    backgroundColor: "#FFD700",
    borderRadius: 5,
  },
  backButtonText: {
    color: "#000",
    fontWeight: "bold",
  },
  header: {
    color: "#FFD700",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  card: {
    backgroundColor: "#1A1A1A",
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  productPrice: {
    color: "#FFD700",
    fontSize: 14,
  },
  noProducts: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
});

export default DisplayCategories;
