import { Stack } from "expo-router";
import Index from "..";
import ClientScreen from "../clientscreen";
import Detail from "../detail";
import FreelancerScreen from "../freelancerscreen";
import HomeScreen from "../home";
import MaharatScreen from "../Maharat";
import SplashScreen from "../splashscreen";
import WelcomeScreen from "../welcomeback";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="index" component={Index} />
      <Stack.Screen name="details" component={Detail} />
      <Stack.Screen name="MaharatScreen" component={MaharatScreen} />
      <Stack.Screen name="FreelancerScreen" component={FreelancerScreen} />
      <Stack.Screen name="ClientScreen" component={ClientScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="WelcomeScreen" component={HomeScreen} />
    </Stack>
  );
}
