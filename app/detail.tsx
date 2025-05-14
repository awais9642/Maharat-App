import { useRouter } from "expo-router";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function Detail() {

   const router = useRouter();
  return (
    <View style={styles.container}>
      
      <View style={styles.image}>
        <Image
          source={require("../assets/images/man.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.text}>Find your dream job now</Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, in numquam per ullam eveniet delectus</Text>
       <View style={styles.buttonRow}>
        <View style={styles.button}>
          <Button title="Skip" onPress={() => router.navigate("/Maharat")} />
        </View>
        <View style={styles.button}>
          <Button
            title="Get Started"
            onPress={() => router.navigate("/Maharat")}
          />
        </View>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#F6F7FF',
  },
  image: { marginTop:15},
  text:{color:'blue',fontSize:30, marginTop:15},
  buttonRow:{
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 50,
    marginTop:15
  },
  button:{

     
  }
});
