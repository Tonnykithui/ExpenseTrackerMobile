import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

let screenWidth = Dimensions.get("window").width;
const SignUpIcons = () => {
  return (
    <View style={styles.signUpIconsContainer}>
      <Icon
        name="facebook"
        size={30}
        color="white"
        style={[
          styles.icons,
          {
            backgroundColor: "blue",
          },
        ]}
      />
      <Icon
        name="google"
        size={30}
        color="green"
        style={[
          styles.icons,
          // { backgroundColor: "red" }
        ]}
      />
      <Icon name="linkedin" size={30} color="blue" style={[styles.icons]} />
    </View>
  );
};

export default SignUpIcons;

const styles = StyleSheet.create({
  signUpIconsContainer: {
    display: "flex",
    flexDirection: "row",
    // backgroundColor: "white",
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
  icons: {
    padding: 10,
    borderRadius: 30,
  },
});

// backgroundColor: "blue",
// padding: 10,
// borderRadius: 50,
// paddingTop: 5,
// paddingBottom: 5,
// height: 40,
// width: 40,
// display: "flex",
// justifyContent: "center",
// alignItems: "center",
// paddingLeft: 10,
// paddingRight: 10,
