// import { StatusBar } from 'expo-status-bar';
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import { Header } from "./src/components/Header";
import Transactions from "./src/components/Transactions";
import CreateNew from "./src/components/Footer";

export default function App() {
  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
      <View style={styles.container}>
        <Header />
        <Transactions />
        <CreateNew />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : SafeAreaView,
  },
});
