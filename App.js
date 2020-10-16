import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Header } from "react-native-elements";
import WriteStoryScreen from "./screens/WriteStoryScreen";
import ReadStoryScreen from "./screens/ReadStoryScreen";
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from "./screens/SignUpScreen";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={"black"}
          centerComponent={{ text: "Story Hub", style: { color: "pink" } }}
        />
        <AppContainer />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Writing: { screen: WriteStoryScreen },
    Reading: { screen: ReadStoryScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ }) => {
        const routeName = navigation.state.routeName;

        if (routeName === "Writing") {
          return (
            <Image
              source={require("./assets/write.png")}
              style={{ width: 30, height: 30 }}
            />
          );
        } else if (routeName === "Reading") {
          return (
            <Image
              source={require("./assets/read.png")}
              style={{ width: 30, height: 30 }}
            />
          );
        }
      },
    }),
  },
  {
    tabBarOptions: {
      style: { backgroundColor: "#ffffff" }
    }
  },
);

const switchNavigator = createSwitchNavigator({
  loginScreen: {screen: LoginScreen},
  signUpScreen: {screen: SignUpScreen},
  TabNavigator: {screen: TabNavigator}
})

const AppContainer = createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
