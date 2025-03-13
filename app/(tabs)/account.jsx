import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  ToastAndroid,
  Share
} from "react-native";
import userImage from '../../assets/images/user.png';
import * as Clipboard from "expo-clipboard";
const AccountScreen = () => {
  const [walletBalance, setWalletBalance] = useState(5000);
  const [referId] = useState("GOUTAM123"); // Sample referral ID
  const router = useRouter();

  const handleWishlistPress = () => {
    // Check if wishlist is working
    // If not, you can show an alert or redirect to a different page
    // For now, we will just log a message
    console.log("Wishlist button pressed");
    router.push("/wishlist");
  };
  const handleCopyReferral = () => {
    Clipboard.setStringAsync(referId);
    ToastAndroid.show("Referral Code Copied!", ToastAndroid.SHORT);
  };
  const handleShareApp = async () => {
    try {
      const message = `Join this app using my referral code: ${referId}. Download now: https://example.com/app`;
      await Share.share({ message });
    } catch (error) {
      console.log("Error sharing:", error);
    }
  };
  return (
    <View style={styles.container}>
      {/* User Profile & Wallet Section */}
      <View style={styles.profileContainer}>
        <Image source={userImage} style={styles.profileImage} />
        <View>
          <Text style={styles.userName}>Goutam Das</Text>
          <Text style={styles.walletBalance}>Wallet: ₹{walletBalance}</Text>
          <TouchableOpacity onPress={handleCopyReferral}>
          <Text style={styles.referId}>Referral ID: {referId}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Categorized Sections */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.sectionsContainer}
      >
        {/* Quick Actions - 2x2 Grid */}
        <View style={styles.quickActions}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => router.push("/orders")}
          >
            <Text style={styles.actionText}>📦 Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => router.push("/wishlist")}
          >
            <Text style={styles.actionText}>💖 Wishlist</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>🎟️ Coupons</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={()=>router.push("/help-center")}>
            <Text style={styles.actionText}>🛠 Help Center</Text>
          </TouchableOpacity>
        </View>
        {/* Account Settings */}
        <Text style={styles.sectionTitle}>⚙️ Account Settings</Text>
        <TouchableOpacity
          style={styles.option}
          onPress={() => router.push("/edit-profile")}
        >
          <Text style={styles.optionText}>✏️ Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => router.push("/payment-method")}
        >
          <Text style={styles.optionText}>💳 Payment Methods</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>📧 Change Email</Text>
        </TouchableOpacity>
        {/* My Activity */}
        <Text style={styles.sectionTitle}>📜 My Activity</Text>
        <TouchableOpacity style={styles.option} onPress={()=>router.push("/orders")}>
          <Text style={styles.optionText}>📦 Order History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleWishlistPress}>
          <Text style={styles.optionText}>💖 Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={()=>router.push("/userr-coupons")}>
          <Text style={styles.optionText}>🎟️ My Coupons</Text>
        </TouchableOpacity>
        {/* More Options */}
        <Text style={styles.sectionTitle}>🔍 More</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>🛠 Help Center</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleShareApp}>
          <Text style={styles.optionText}>⚡ Refer & Earn</Text>
        </TouchableOpacity>
        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>🚪 Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    padding: 20,
    paddingTop: 50,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1A1A1A",
    padding: 15,
    borderRadius: 15,
    shadowColor: "#000",
    elevation: 5,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15,
  },
  userName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  walletBalance: {
    color: "#1E90FF",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  referId: {
    color: "#FFD700",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  quickActions: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
  actionButton: {
    width: "48%",
    backgroundColor: "#1A1A1A",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
    elevation: 5,
  },
  actionText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  sectionsContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    color: "#1E90FF",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  option: {
    backgroundColor: "#1A1A1A",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "#000",
    elevation: 5,
  },
  optionText: {
    color: "#fff",
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: "#FF4D4D",
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
