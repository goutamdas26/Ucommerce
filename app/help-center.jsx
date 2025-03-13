import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import GoBackButton from '../src/components/goBackBtn';
import GoBackButton2 from '../src/components/goBackBtn2';

const HelpSupport = () => {
  return (
    <View style={styles.container}>
      <GoBackButton2/>
      <View style={styles.card}>
        <Text style={styles.title}>Help & Support</Text>
        <Text style={styles.description}>
          Need assistance? Our support team is here to help you with any queries or issues you may have.
        </Text>
        <Text style={styles.additionalInfo}>
          You can also check our FAQ section for quick answers to common questions.
        </Text>
        <Text style={styles.additionalInfo}>
          For urgent matters, please reach out to us via our live chat support available 24/7.
        </Text>
        <Text style={styles.contactOptions}>Contact us:</Text>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactButtonText}>💬 Chat with Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactButtonText}>📞 Call Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactButtonText}>✉️ Mail Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Contact Support</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 10,
  },
  additionalInfo: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 10,
  },
  contactOptions: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 10,
  },
  contactButton: {
    backgroundColor: '#FF6F61',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  contactButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FF6F61',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HelpSupport;