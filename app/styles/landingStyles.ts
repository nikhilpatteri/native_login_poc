import { StyleSheet } from "react-native";

export const landingstyles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  img: {
    marginTop: 50,
    height: 180,
    width: 180,
  },
  signupBtn: { backgroundColor: "#133C79" },
  phView: {
    justifyContent: "center",
    alignSelf: "stretch",
    padding: 20,
  },
  continueView: {
    justifyContent: "center",
    alignSelf: "stretch",
    padding: 20,
  },
  continueBtn: {
    backgroundColor: "rgba(78, 116, 289, 1)",
    borderRadius: 3,
  },
  warning: {
    color: 'red',
  }
});
