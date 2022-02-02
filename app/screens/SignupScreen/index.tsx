import { Text, View } from "react-native";
import Logo from "../../components/Logo";
import { signUpStyles as styles } from "../../styles/signupStyles";
import SignupForm from "./components/SignupForm";

const SignupScreen = ({ navigation }: any) => {
  const _handleSubmit = (request: any) => {
    console.log(request);
    // const url = "dummyurl";
    // fetch(url, { method: "POST", body: JSON.stringify(request) }).then(() => {
    //   console.log('success on network call')
    // }).catch(() => {
    //   console.log('error happened on network call')
    // })
    navigation.navigate("Success");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo />
        <Text style={styles.signupLabel}>Sign Up</Text>
      </View>
      <SignupForm navigation={navigation} handleSubmit={_handleSubmit} />
    </View>
  );
};

export default SignupScreen;
