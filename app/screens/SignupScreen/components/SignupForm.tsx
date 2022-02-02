import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements";
import Asterisk from "../../../components/Asterisk";
import HelperText from "../../../components/HelperText";
import {
  MOBILE_NO_MAX_LIMIT,
  NAME_INPUT_MAX_LENGTH,
} from "../../../constants/constants";
import { signUpStyles as styles } from "../../../styles/signupStyles";

const SignupForm = ({ handleSubmit }: any) => {
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [bniMember, setBniMember] = useState<string>("");
  const [isPhoneValid, setIsPhoneValid] = useState<boolean>(true);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

  const _handleFormSubmit = (): void => {
    if (phone === "") {
      setIsPhoneValid(false);
    } else if (email === "") {
      setIsEmailValid(false);
    } else if (isEmailValid) {
      const request = {
        name,
        lastName,
        phone,
        email,
        bniMember,
      };
      handleSubmit(request);
    }
  };

  const _handlePhoneChange = (text: string): void => {
    if (!isPhoneValid) {
      setIsPhoneValid(true);
    }
    setPhone(text);
  };

  const _handleEmailChange = (text: string): void => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!reg.test(text)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }
    setEmail(text);
  };

  return (
    <View style={styles.form}>
      <ScrollView>
        <View style={styles.form_elements}>
          <Text style={styles.formElemLabel}>Name</Text>
          <TextInput
            placeholder="Enter name"
            style={styles.input}
            onChangeText={(text) => setName(text)}
            value={name}
            maxLength={NAME_INPUT_MAX_LENGTH}
          />
        </View>
        <View style={styles.form_elements}>
          <Text style={styles.formElemLabel}>Last Name</Text>
          <TextInput
            placeholder="Enter Last Name"
            style={styles.input}
            onChangeText={(text) => setLastName(text)}
            value={lastName}
            maxLength={NAME_INPUT_MAX_LENGTH}
          />
        </View>
        <View style={styles.form_elements}>
          <Text style={styles.formElemLabel}>
            Phone Number
            <Asterisk />
          </Text>
          <TextInput
            placeholder="Enter Phone"
            style={styles.input}
            onChangeText={_handlePhoneChange}
            value={phone}
            maxLength={MOBILE_NO_MAX_LIMIT}
            keyboardType="phone-pad"
          />
          {!isPhoneValid && (
            <HelperText>Please enter valid Phone Number</HelperText>
          )}
        </View>
        <View style={styles.form_elements}>
          <Text style={styles.formElemLabel}>
            Email ID
            <Asterisk />
          </Text>
          <TextInput
            placeholder="Enter Email ID"
            style={styles.input}
            textContentType="emailAddress"
            value={email}
            onChangeText={_handleEmailChange}
          />
          {!isEmailValid && (
            <HelperText>Please enter valid Email ID</HelperText>
          )}
        </View>
        <View style={styles.form_elements}>
          <Text style={styles.formElemLabel}>BNI Member ID</Text>
          <TextInput
            placeholder="Are you a BNI Member?"
            style={styles.input}
            value={bniMember}
            onChangeText={(text) => setBniMember(text)}
          />
        </View>
        <View style={styles.continue}>
          <Button title="Continue" onPress={_handleFormSubmit} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignupForm;
