import { View, Text, StyleSheet } from "react-native";
import React from "react";

const TitleMessageView = ({ title, message }) => {
  return (
    <View style={styles.titleMsgViewContainer}>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <View style={styles.msgContainer}>
          <Text style={styles.messageText}>{message}</Text>
          <Text style={styles.messageText}>cent matters!</Text>
        </View>
      </View>
    </View>
  );
};

export default TitleMessageView;

const styles = StyleSheet.create({
  titleMsgViewContainer: {
    display: "flex",
  },
  titleTextContainer: {
    display: "flex",
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 35,
    fontWeight: "bold",
    // backgroundColor: "blue",
    // width: "100%",
  },
  messageText: {
    fontSize: 16,
    // padding: 10,
    color: "#191970",
  },
  msgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
});
