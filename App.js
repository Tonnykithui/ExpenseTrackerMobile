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
import { Provider } from "react-redux";
import store from "./src/redux/store";
import ModalComponent from "./src/components/ModalComponent";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewBill from "./src/components/NewBill";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import WelcomeCover from "./src/components/WelcomeCover";
import Login from "./src/components/Login";
import LoginPageComponent from "./src/components/LoginPageComponent";

export default function App() {
  let Stack = createNativeStackNavigator();
  let Tab = createBottomTabNavigator();

  let HomeComponent = () => {
    return (
      <View style={styles.container}>
        <Header />
        <Transactions />
      </View>
    );
  };

  let HomeComponentTab = () => {
    return (
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home Page"
          component={HomeComponent}
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="New Bill"
          component={NewBill}
          options={{
            title: "New Bill",
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name="bank-plus"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="login" component={Login}></Stack.Screen>
          <Stack.Screen name="welcome" component={WelcomeCover}></Stack.Screen>
          <Stack.Screen name="Home" component={HomeComponentTab}></Stack.Screen>
          <Stack.Screen
            name="loginPage"
            component={LoginPageComponent}
          ></Stack.Screen>
          <Stack.Screen
            name="LoginPageComponent"
            component={LoginPageComponent}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
