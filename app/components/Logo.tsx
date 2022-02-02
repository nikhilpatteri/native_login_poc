import { Image } from "react-native";
import { commonStyles } from "../../commonStyles";

const Logo = () => {
  return (
    <Image
      source={require("../../assets/logo_transparent.png")}
      style={commonStyles.topLogo}
    />
  );
};

export default Logo;
