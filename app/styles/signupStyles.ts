import { StyleSheet } from "react-native";

export const signUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  logo: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  signupLabel: {
    fontSize: 24,
  },
  form: {
    flex: 0.8,
    alignSelf: "stretch",
  },
  form_elements: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 15,
    marginBottom: 15,
  },
  formElemLabel: {
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  continue: {
    // flex: 0.1,
    alignSelf: "stretch",
    padding: 20,
  },
});
