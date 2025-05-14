import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen() {

  const router = useRouter();

  return (
     <View style={styles.container}>
      <Text style={styles.subtitle}>Sign In</Text>
      <Text style={styles.description}>Login to access your account</Text>

      <View style={styles.separator} />

      <View style={styles.formGroup}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          keyboardType="email-address"
          
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Create a password"
          secureTextEntry={true}
        
        />
      </View>

      <TouchableOpacity
                  style={styles.button}
                  
                  onPress={()=>router.navigate('/home')}
                  
                >
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => router.navigate('/home')}>
          <Text style={styles.signupLink}>Create New Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#fff',
  },
 
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 30,
    color: 'blue',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#444',
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
     backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonActive: {
    backgroundColor: '#4a90e2',
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
  },
  buttonText: {
 color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  signupText: {
    fontSize: 15,
    color: '#555',
  },
  signupLink: {
    fontSize: 15,
    color: '#4a90e2',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
