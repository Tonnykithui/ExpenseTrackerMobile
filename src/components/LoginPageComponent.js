import {
  View,
  Text,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
  Dimensions,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  findNodeHandle,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import LoginSvg from "../assets/imgs/login.svg";
import CustomButton from "./Button";

const LoginPageComponent = ({ navigation }) => {
  let loginUserDetails = {
    name: "userX",
    email: "userx@gmail.com",
    password: "userx",
  };

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginNameItems = ["Name", "Email", "Password"];

  const handleBtnPress = () => {
    // console.log("SUBMITTED!");
    let loginDetails = {
      name,
      email,
      password,
    };
    // console.log("LOGIN DETAILS:", loginDetails);
    if (
      loginDetails.email == loginUserDetails.email &&
      loginDetails.password == loginUserDetails.password
    ) {
      navigation.navigate("Home");
    } else {
      Alert.alert("Login Error", "Incorrect email or password", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  };

  return (
    <KeyboardAvoidingView
      style={[
        styles.loginPageContainer,
        { paddingBottom: Platform.OS === "ios" ? 0 : 40 },
      ]}
      enabled
    >
      <View style={styles.loginSvgView}>
        <LoginSvg height={50} />
      </View>

      <View style={styles.inputComponentView}>
        <View style={styles.loginTitleTextContainer}>
          <Text style={styles.loginTitleText}>Login</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            value={name}
            onChangeText={setName}
            style={styles.loginTextInput}
            placeholder="Name"
          />
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.loginTextInput}
            placeholder="Email"
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.loginTextInput}
            placeholder="Password"
          />
          <Text style={styles.forgotPasswordLink}>Forgot password? click</Text>
        </View>
        <View style={styles.loginSubmitBtn}>
          <CustomButton
            str="Sign Up"
            bgColor="blue"
            btnTextColor="white"
            state={false}
            width="40%"
            onPress={handleBtnPress}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginPageComponent;

const styles = StyleSheet.create({
  loginPageContainer: {
    marginTop:
      Platform.OS == "android" ? StatusBar.currentHeight : SafeAreaView,
    padding: 20,
    flex: 1,
    borderRadius: 5,
    // height: "100%",
  },
  loginSvgView: {
    height: "10%",
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputComponentView: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    height: "60%",
  },
  loginTextInput: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 14,
    borderColor: "grey",
  },
  textInputContainer: {
    gap: 20,
  },
  loginTitleText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  loginTitleTextContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginSubmitBtn: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  forgotPasswordLink: {
    color: "blue",
  },
});

// const LoginInputs = ({ title, itemName, setItemName }) => {
//     return (
//       <View>
//         <Text style={{ paddingLeft: 10, fontWeight: "bold" }}>{title}</Text>
//         <TextInput
//           style={styles.loginTextInput}
//           value={itemName}
//           onChangeText={setItemName}
//         ></TextInput>
//       </View>
//     );
//   };

{
  /* <LoginInputs
itemName={name}
key={Math.random()}
setItemName={setName}
/>
<LoginInputs
itemName={email}
key={Math.random()}
setItemName={setEmail}
/>
<LoginInputs
itemName={password}
key={Math.random()}
setItemName={setPassword}
/> */
}
