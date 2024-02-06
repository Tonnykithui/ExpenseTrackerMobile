import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";

const CustomButton = ({
  str,
  state,
  bgColor,
  btnTextColor,
  width,
  onPress,
}) => {
  let colorBtn = bgColor;
  const [currentColor, setCurrentColor] = useState(bgColor);
  const changeColor = () => {
    setCurrentColor("red");
  };
  return (
    <Pressable
      style={[
        styles.pressableContainer,
        { backgroundColor: `${currentColor}`, width: `${width}` },
      ]}
      disabled={state}
      onPress={onPress}
    >
      <Text style={[styles.btnText, { color: `${btnTextColor}` }]}>{str}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  pressableContainer: {
    borderRadius: 20,
    padding: 14,
    display: "flex",
    justifyContent: "center",
    // width: "90%",
    alignItems: "center",
    margin: 5,
  },

  btnText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
