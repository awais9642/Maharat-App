import { useRouter } from "expo-router";
import React from 'react';
import { CheckBox, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function MaharatScreen() {
    const router = useRouter();
  return (
    <ScrollView>
       <View style={styles.container}>
      <Text style={styles.title}>Join Maharat</Text>
      <Text style={styles.subtitle}>Choose your path</Text>
      <Text style={styles.description}>Select how you want to use Maharat</Text>

      <View style={styles.separator} />

      {/* Freelancer Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Join as a Freelancer</Text>
        <Text style={styles.cardSubtitle}>Find work and grow your career</Text>
        
        <View style={styles.featureItem}>
          <CheckBox value={true} />
          <Text style={styles.featureText}>Access top jobs</Text>
        </View>
        <View style={styles.featureItem}>
          <CheckBox value={true} />
          <Text style={styles.featureText}>Strengthen your skills</Text>
        </View>
        <View style={styles.featureItem}>
          <CheckBox value={true} />
          <Text style={styles.featureText}>Get paid securely</Text>
        </View>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => router.navigate('/freelancerscreen')}
        >
          <Text style={styles.buttonText}>Get Started →</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.separator} />

      {/* Client Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Join as a Client</Text>
        <Text style={styles.cardSubtitle}>Hire talent and grow your business</Text>
        
        <View style={styles.featureItem}>
          <CheckBox value={true} />
          <Text style={styles.featureText}>Post jobs</Text>
        </View>
        <View style={styles.featureItem}>
          <CheckBox value={true} />
          <Text style={styles.featureText}>Find top talent</Text>
        </View>
        <View style={styles.featureItem}>
          <CheckBox value={true} />
          <Text style={styles.featureText}>Manage projects</Text>
        </View>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => router.navigate('/clientscreen')}
        >
          <Text style={styles.buttonText}>Get Started →</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => router.navigate('/welcomeback')}>
          <Text style={styles.loginLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    color: '#555',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: '#777',
    marginBottom: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  cardSubtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureText: {
    fontSize: 15,
    color: '#555',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
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
