import {
  View,
  Text,
  StatusBar,
  Platform,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import Savings from "../assets/imgs/savings.svg";
import Svg, { Path } from "react-native-svg";
import CustomButton from "./Button";
import TitleMessageView from "./TitleMessageView";
import SignUpIcons from "./SignUpIcons";

const Login = ({ navigation }) => {
  const handleButtonPress = () => {
    navigation.navigate("LoginPageComponent");
  };
  return (
    <View style={styles.loginContainer}>
      <View style={styles.loginMainViews}>
        <Savings height={200} />
      </View>
      <View style={[styles.loginMainViewsCenter]}>
        <TitleMessageView
          message="Welcome to little drop where every single"
          title="Hello"
        />
        <View style={styles.btnComponentLogin}>
          <CustomButton
            bgColor="blue"
            btnTextColor="white"
            state={false}
            width="100%"
            str="Login"
          />
          <CustomButton
            bgColor="white"
            btnTextColor="blue"
            state={false}
            width="100%"
            str="Sign Up"
            onPress={handleButtonPress}
          />
        </View>
      </View>
      <View style={styles.bottom_LoginScreen}>
        <Text>Sign up using:</Text>
        <SignUpIcons />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : SafeAreaView,
    flex: 1,
    width: "100%",
    padding: 20,
    height: "100%",
  },

  loginMainViews: {
    width: "100%",
    height: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  btnComponentLogin: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    // backgroundColor: "blue",
  },
  loginMainViewsCenter: {
    width: "100%",
    height: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bottom_LoginScreen: {
    // backgroundColor: "blue",
    height: "30%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    // padding: 20,
  },
});
