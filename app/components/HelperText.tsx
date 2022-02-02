import { Text } from "react-native";
import { commonStyles } from "../../commonStyles";

const HelperText = (props: any): JSX.Element => {
  return <Text style={commonStyles.warning}>{props.children}</Text>;
};

export default HelperText;
