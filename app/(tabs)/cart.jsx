import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import laptopImage from '../../assets/images/laptop.png';

const initialCart = [
  {
    id: "1",
    name: "iPhone 15",
    price: 1299,
    quantity: 1,
    image: "https://source.unsplash.com/100x100/?iphone",
  },
  {
    id: "2",
    name: "MacBook Air",
    price: 999,
    quantity: 1,
    image: "https://source.unsplash.com/100x100/?laptop",
  },
  {
    id: "3",
    name: "Nike Shoes",
    price: 199,
    quantity: 1,
    image: "https://source.unsplash.com/100x100/?shoes",
  },
];

const CartScreen = () => {
  const [cart, setCart] = useState(initialCart);

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    Alert.alert("Remove Item", "Are you sure you want to remove this item?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Remove",
        onPress: () => setCart(cart.filter((item) => item.id !== id)),
      },
    ]);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>

      {cart.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty 🛒</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.itemImage}
                />
                <View style={styles.itemDetails}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>₹{item.price}</Text>
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity
                      onPress={() => decreaseQuantity(item.id)}
                      style={styles.quantityButton}
                    >
                      <Text style={styles.quantityText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <TouchableOpacity
                      onPress={() => increaseQuantity(item.id)}
                      style={styles.quantityButton}
                    >
                      <Text style={styles.quantityText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity onPress={() => removeItem(item.id)}>
                  <Text style={styles.removeText}>✖</Text>
                </TouchableOpacity>
              </View>
            )}
          />
          <View style={styles.footer}>
            <Text style={styles.totalPrice}>Total: ₹{totalPrice}</Text>
            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 15,
    paddingTop: 50,
  },
  header: {
    color: "#FFD700", // Gold color for luxury
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  emptyText: {
    color: "#bbb",
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1A1A1A",
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 15,
  },
  itemName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  itemPrice: {
    color: "#FFD700", // Gold color for luxury
    fontSize: 16,
    marginVertical: 5,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  quantityButton: {
    backgroundColor: "#333",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  quantityText: {
    color: "#fff",
    fontSize: 16,
  },
  quantity: {
    color: "#fff",
    fontSize: 16,
    marginHorizontal: 10,
  },
  removeText: {
    color: "#FF4D4D",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  footer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#1A1A1A",
    borderRadius: 15,
    alignItems: "center",
  },
  totalPrice: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  checkoutButton: {
    backgroundColor: "#1E90FF",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 10,
  },
  checkoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
