import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import Constants from "expo-constants";
import axios from 'axios'; // Import axios for API calls

const API_URL = Constants.expoConfig.extra.API_URL;

const SignupScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [referralCode, setReferralCode] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/auth/register`, {
        name,
        email,
        password,
        referralCode,
      });

      if (response.data.success) {
        ToastAndroid.show("Account created successfully!", ToastAndroid.SHORT); // Android toast message
        // Use replace instead of push to navigate to login
        router.replace("/login"); // Redirect to login after successful signup
      } else {
        ToastAndroid.show(response.data.message || "Signup failed! Please try again.", ToastAndroid.SHORT); // Android toast message
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log(error);

        ToastAndroid.show("User Already Exist.", ToastAndroid.SHORT); // Android toast message
      } else {
        console.log(error)
        ToastAndroid.show("Signup failed! Please try again.", ToastAndroid.SHORT); // Android toast message
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#AAA"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#AAA"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#AAA"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Optional Referral Code Input */}
      <TextInput
        style={styles.input}
        placeholder="Referral Code (Optional)"
        placeholderTextColor="#AAA"
        value={referralCode}
        onChangeText={setReferralCode}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
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
  loginText: {
    color: '#FFFFFF',
    marginTop: 15,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default SignupScreen;
