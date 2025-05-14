import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ClientScreen() {
  const router = useRouter();
  return (
     <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <Text style={styles.subtitle}>Start hiring top talent for your projects</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Business Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          keyboardType="email-address"
          
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter phone number"
          keyboardType="phone-pad"
         
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Company Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
         
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Select an Industry</Text>
        <TextInput
          style={styles.input}
          placeholder="Value"
        
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

      <View style={styles.formGroup}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Create a password"
          secureTextEntry={true}
          
        />
      </View>
      <View style={styles.termsContainer}>
        <TouchableOpacity style={styles.checkboxContainer} >
          <View style={styles.checkbox}>
           
          </View>
          <Text style={styles.checkboxText}>I accept the terms</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.navigate('/welcomeback')}>
          <Text style={styles.termsLink}>Read our T&Cs</Text>
        </TouchableOpacity>
      </View>

    <TouchableOpacity
            style={styles.button}
            
            onPress={()=>router.navigate('/welcomeback')}
            
          >
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => router.navigate('/welcomeback')}>
          <Text style={styles.loginLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 25,
    backgroundColor: '#F6F7FF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#444',
    marginBottom: 8,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    marginBottom: 15,
  },
  termsContainer: {
    marginVertical: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#4a90e2',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxChecked: {
    width: 12,
    height: 12,
    backgroundColor: '#4a90e2',
    borderRadius: 2,
  },
  checkboxText: {
    fontSize: 15,
    color: '#555',
  },
  termsLink: {
    fontSize: 14,
    color: '#4a90e2',
    marginLeft: 30,
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
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    fontSize: 15,
    color: '#555',
  },
  loginLink: {
    fontSize: 15,
    color: '#4a90e2',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
