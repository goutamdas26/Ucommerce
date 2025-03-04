import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const EditProfileScreen = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState("Goutam Das");
  const [email, setEmail] = useState("goutam@example.com");
  const [phone, setPhone] = useState("9876543210");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePic(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
        <Image
          source={
            profilePic
              ? { uri: profilePic }
              : require("../assets/images/icon.png")
          }
          style={styles.profileImage}
        />
        <Text style={styles.editText}>Edit</Text>
      </TouchableOpacity>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Phone</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.buttonText}>💾 Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.buttonText}>❌ Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    padding: 20,
    alignItems: "center",
  },
  imageContainer: {
    marginTop: 40,
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#1E90FF",
  },
  editText: {
    color: "#1E90FF",
    marginTop: 5,
    fontSize: 14,
  },
  inputContainer: {
    width: "100%",
    marginTop: 30,
  },
  label: {
    color: "#B0B0B0",
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#1A1A1A",
    color: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    width: "100%",
    justifyContent: "space-between",
  },
  saveButton: {
    backgroundColor: "#1E90FF",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#FF4D4D",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
