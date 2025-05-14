import { useRouter } from 'expo-router';
import React from 'react';
import { CheckBox, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';



export default function FreelancerScreen() {
   const router = useRouter();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <Text style={styles.subtitle}>Start your journey as a professional freelancer</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
         
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Email Address</Text>
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
          // value={formData.phone}
          // onChangeText={(text) => handleChange('phone', text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Create a password"
          secureTextEntry={true}
          // value={formData.password}
          // onChangeText={(text) => handleChange('password', text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Create a password"
          secureTextEntry={true}
          // value={formData.confirmPassword}
          // onChangeText={(text) => handleChange('confirmPassword', text)}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <View style={styles.checkboxItem}>
          <CheckBox
            // value={formData.acceptTerms}
            // onValueChange={(value: string) => handleChange('acceptTerms', value)}
          />
          <Text style={styles.checkboxText}>I accept the terms</Text>
        </View>
        <TouchableOpacity onPress={() => router.navigate('/welcomeback')}>
          <Text style={styles.termsLink}>Read our T&Cs</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        // onPress={handleSubmit}
        onPress={()=>router.navigate('/welcomeback')}
        // disabled={!formData.acceptTerms}
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
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
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
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  checkboxContainer: {
    marginVertical: 15,
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  checkboxText: {
    fontSize: 15,
    color: '#555',
    marginLeft: 8,
  },
  termsLink: {
    fontSize: 14,
    color: '#4a90e2',
    marginLeft: 28,
    marginTop: -5,
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
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
