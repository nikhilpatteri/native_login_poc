import { Text, View } from "react-native";
import Logo from "../components/Logo";
import { successStyles as styles } from "../styles/successStyles";

const SuccessScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Logo />
      </View>
      <Text style={styles.label}>Form Submitted successfuly</Text>
    </View>
  );
};

export default SuccessScreen;
