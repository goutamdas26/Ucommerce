import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios'; // Import axios for API calls
import Constants from "expo-constants";

const API_URL = Constants.expoConfig.extra.API_URL;

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await SecureStore.getItemAsync("userToken");
      if (token) {
        router.replace("/(tabs)"); // Redirect if already logged in
      }
    };
    checkLoginStatus();
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password,
      });
      if (response.status==200) {
        // Store token in SecureStore
        await SecureStore.setItemAsync("userToken", response.data.token);
        console.log(response.data.token)
        Alert.alert("Success", "Login Successful!");
        router.replace("/(tabs)"); // Navigate to Home
      } else {
        Alert.alert("Error", "Invalid email or password!");
      }
    } catch (error) {


      Alert.alert("Error", "Login failed! Please try again.");
    }
   
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome Back</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#AAA"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#AAA"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/signup")}>
        <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    textShadowColor: '#FFFFFF',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  input: {
    width: '100%',
    backgroundColor: '#1A1A1A',
    color: '#FFFFFF',
    fontSize: 18,
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    shadowColor: '#FFFFFF',
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  button: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#FFFFFF',
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0A0A0A',
  },
  forgotPassword: {
    color: '#FFFFFF',
    marginTop: 15,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  signupText: {
    color: '#FFFFFF',
    marginTop: 15,
    fontSize: 16,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
