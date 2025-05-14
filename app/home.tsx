import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
     <View style={styles.container}>
      <Text style={styles.subtitle}>Screen is in progress</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F7FF',
    padding: 20,
  },
 
  subtitle: {
    fontSize: 30,
    color: 'blue',
    textAlign: 'center',
  },
});