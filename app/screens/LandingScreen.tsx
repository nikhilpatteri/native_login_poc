import { useState } from "react";
import { Image, Linking, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MOBILE_NO_MAX_LIMIT } from "../constants/constants";
import {
  AGREE_WITH_BTN_TEXT,
  INVALID_PHONE_WARNING,
  LOGIN_SIGNUP_BTN_TEXT,
  LOGIN_SIGNUP_BTN_TEXT_ACC_LABEL,
  PHONE_NUMBER_PH_TEXT,
} from "../constants/labelConstants";
import { landingstyles } from "../styles/landingStyles";

const LandingScreen = ({ navigation }: { navigation: any }) => {
  const [mobileNo, setMobileNo] = useState<string>("");
  const [isMobileValid, setIsMobileValid] = useState<boolean>(true);
  const insets = useSafeAreaInsets();

  const _handleContinue = () => {
    if (mobileNo?.length === MOBILE_NO_MAX_LIMIT) {
      navigation.navigate("VerifyOTP");
    } else {
      setIsMobileValid(false);
    }
  };

  const _handleMobileChange = (text: string) => {
    if (!isMobileValid) {
      setIsMobileValid(true);
    }
    setMobileNo(text);
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          backgroundColor: "#1093F8",
        }}
      >
        <View style={{ flex: 0.5 }}>
          <Image
            source={require("../../assets/logo_transparent.png")}
            style={landingstyles.img}
          />
        </View>
        <View style={{ flex: 0.5, width: "100%", alignItems: "center" }}>
          <View
            style={{
              flexDirection: "row",
              paddingBottom: 20,
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>
              {AGREE_WITH_BTN_TEXT}
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                textDecorationLine: "underline",
              }}
              onPress={() => Linking.openURL("www.google.com")}
            >
              {" "}
              Terms
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignSelf: "stretch",
              padding: 20,
            }}
          >
            <Button
              onPress={() => {}}
              title={LOGIN_SIGNUP_BTN_TEXT}
              accessibilityLabel={LOGIN_SIGNUP_BTN_TEXT_ACC_LABEL}
              buttonStyle={landingstyles.signupBtn}
            />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text>Phone Number</Text>
          </View>
          <View style={landingstyles.phView}>
            <TextInput
              style={landingstyles.input}
              dataDetectorTypes="phoneNumber"
              placeholder={PHONE_NUMBER_PH_TEXT}
              maxLength={10}
              onChangeText={_handleMobileChange}
              value={mobileNo}
              keyboardType="phone-pad"
            ></TextInput>
            {!isMobileValid && (
              <Text style={landingstyles.warning}>{INVALID_PHONE_WARNING}</Text>
            )}
          </View>
          <View style={landingstyles.continueView}>
            <Button
              onPress={_handleContinue}
              title="Continue"
              buttonStyle={landingstyles.continueBtn}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default LandingScreen;
