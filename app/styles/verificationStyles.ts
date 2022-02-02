import { StyleSheet } from "react-native";

export const verificationStyles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  label: {
    flex: 0.4,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  otpContainer: {
    flex: 0.2,
    justifyContent: "flex-start",
    alignContent: 'space-around',
    alignItems: 'center'
  },
  enterOtp: {
    fontSize: 20
  },
  otpInput: {
    backgroundColor: "lightblue",
    padding: 10,
    margin: 5,
  },
  resendBtn: {
    flex: 0.1,
    backgroundColor: "white",
    color: "black",
    justifyContent: "flex-start",
    alignSelf: "stretch",
    padding: 20,
  },
  continueBtn: {
    flex: 0.1,
    alignSelf: "stretch",
    padding: 20,
  },
});
