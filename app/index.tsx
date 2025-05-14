import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';


export default function Index() {
   const router = useRouter();
 // const navigation = useNavigation();

  const handleDone=()=>{
     router.push("/detail")
  }
   const Done =({...props})=>{
      return(
        <TouchableOpacity {...props}>
        <Text> Get Started</Text>
        </TouchableOpacity>
      )
   }

  return (
    <View style={styles.container}>
        <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
         DoneButtonComponent={Done}
        containerStyles={{paddingHorizontal:20}}
        imageContainerStyles={styles.imageContainer}
        titleStyles={styles.title}
        subTitleStyles={styles.subtitle}
          pages={[
            {
              backgroundColor: '#F6F7FF',
             image: (
              <Image
                source={require('../assets/images/girl.png')}
                style={styles.image}
                resizeMode="contain"
              />
            ),
              title: "Find your dream job now",
              subtitle: 'Connect with top companies and get the job opportunities you deserve',
            },
            {
              backgroundColor: '#F6F7FF',
               image: (
              <Image
                source={require('../assets/images/girl-using-laptop.png')}
                style={styles.image}
                resizeMode="contain"
              />
            ),
              title: "Hire Top Talent",
               subtitle: 'Connect with top companies and get the job opportunities you deserve',
            },
            {
              backgroundColor:'#F6F7FF',
               image: (
              <Image
                source={require('../assets/images/man.png')}
                style={styles.image}
                resizeMode="contain"
              />
            ),
              title: "Secure payments",
              subtitle: "Safe & secure payment system for all transactions",
            },
          ]}
        />
        {/* <Text>Splash Screen</Text> */}
        {/* <Button
          title="go to details "
          onPress={() => router.navigate("/detail")}
        />
        <Button
          title="go to splash Screen "
          onPress={() => router.navigate("/splashscreen")}
        /> */}
      {/* <Link href="/details">View details</Link> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
     flex: 1,
    
  
  },
    imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 0,
  },
  image:{
    width:1000,
    height:1000,
  },
   title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  
})
