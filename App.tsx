import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Landing from "./app/screens/LandingScreen";
import SignupScreen from "./app/screens/SignupScreen";
import SuccessScreen from "./app/screens/SuccessScreen";
import OtpVerification from "./app/screens/VerificationScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VerifyOTP"
            component={OtpVerification}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Success"
            component={SuccessScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
