import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Button,
  Dimensions,
} from "react-native";
import React from "react";
import { BlurView } from "@react-native-community/blur";

const WelcomeCover = () => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  console.log(windowHeight);
  console.log(windowWidth);
  return (
    <View style={styles.WelcomeCoverContainer}>
      <View style={[styles.WelcomeCoverMainViews]}>
        <View style={styles.InnerView}>
          <Text style={styles.TextColor}>Manage All</Text>
          <Text style={styles.TextColor}>Expenses In</Text>
          <Text style={styles.TextColor}>One Platform</Text>
        </View>
      </View>
      <View style={[styles.WelcomeCoverMainViews]}>
        <View style={styles.InnerView}>
          <View style={styles.glasmorphism}>
            <View style={styles.slideBtn}>
              <View style={styles.slideRight}></View>
              <View style={{ paddingLeft: 15 }}>
                <Text style={styles.slideMessage}>Swipe To Start</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WelcomeCover;

const styles = StyleSheet.create({
  WelcomeCoverContainer: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: "white",
    display: "flex",
    flex: 1,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 20,
    width: "100%",
  },
  WelcomeCoverMainViews: {
    width: "100%",
    height: "50%",
  },
  TextColor: {
    color: "black",
    fontSize: 40,
    fontWeight: "bold",
  },
  InnerView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  glasmorphism: {
    borderRadius: 20,
    width: "80%",
    height: "80%",
    // position: "absolute",
    // bottom: 40,
    backgroundColor: "blue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  slideBtn: {
    height: 60,
    width: "100%",
    padding: 5,
    backgroundColor: "white",
    borderRadius: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  slideRight: {
    height: 50,
    backgroundColor: "#6a5acd",
    width: 50,
    borderRadius: 50,
  },
  slideMessage: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

{
  /* <ImageBackground
          source={`${hand}`}
          style={{ height: "100%", borderRadius: 20 }}
        ></ImageBackground> */
}
// const styles = StyleSheet.create({
//   coverPicContainer: {
//     display: "flex",
//     flex: 1,
//     padding: 20,
//     width: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   coverPic: {
//     marginTop: StatusBar.currentHeight,
//     flex: 1,
//     width: "100%",
//     position: "relative",
//   },
//   coverPicButton: {
//     width: "100%",
//   },
//   welcome: {
//     backgroundColor: "white",
//     borderRadius: 10,
//     marginBottom: 30,
//   },
//   welcomeView: {
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   coverPicTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
// });

{
  /* <ImageBackground source={`${happyman}`} style={styles.coverPic}> */
}
//   <View style={styles.coverPicContainer}>
//     <View style={styles.welcome}>
//       <View style={styles.welcomeView}>
//         <Text style={styles.coverPicTitle}>Simplify spending,</Text>
//         <Text style={styles.coverPicTitle}>Amplify savings.</Text>
//       </View>
//       <Text>Your Financial Wellness, Our Priority.</Text>
//     </View>
//     <View style={styles.coverPicButton}>
//       <Button title="Continue" color="blue"></Button>
//     </View>
//   </View>
// </ImageBackground>
{
  /* <linearGradient
        // Button Linear Gradient
        colors={["#4c669f", "#3b5998", "#192f6a"]}
        style={styles.button}
      >
        <Text style={styles.text}>Sign in with Facebook</Text>
      </linearGradient> */
}
