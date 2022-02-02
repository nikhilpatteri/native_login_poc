import { RefObject, useRef, useState } from "react";
import { Image, Text, View } from "react-native";
import { Button } from "react-native-elements";
import OtpInputs, { OtpInputsRef } from "react-native-otp-inputs";
import { commonStyles } from "../../commonStyles";
import Logo from "../components/Logo";
import { OTP_MAX_LENGTH } from "../constants/constants";
import { verificationStyles as styles } from "../styles/verificationStyles";

const VerificationScreen = ({ navigation }: { navigation: any }) => {
  const otpRef: RefObject<OtpInputsRef> = useRef(null);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const _handleChange = (code: string) => {
    if (code.length === OTP_MAX_LENGTH) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const _handleContinue = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Logo />
      </View>
      <View style={styles.otpContainer}>
        <Text style={styles.enterOtp}>Enter OTP</Text>
        <OtpInputs
          handleChange={_handleChange}
          autofillFromClipboard={false}
          numberOfInputs={6}
          inputContainerStyles={styles.otpInput}
          ref={otpRef}
        />
      </View>
      <View>
        <Button title={"Resend OTP"} type="clear" />
      </View>
      <View style={styles.continueBtn}>
        <Button
          title="Continue"
          disabled={isDisabled}
          onPress={_handleContinue}
        />
      </View>
    </View>
  );
};

export default VerificationScreen;
