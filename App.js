import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";

import useCachedResources from "./hooks/useCachedResources";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import LinkingConfiguration from "./navigation/LinkingConfiguration";
import Login from "./Login";

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();
  loggedIn = true;

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer linking={LinkingConfiguration}>
        <Stack.Navigator headerMode="none">
          {loggedIn == false ? (
            // No token found, user isn't signed in
            <Stack.Screen
              name="SignIn"
              component={Login}
              options={{
                title: "Sign in",
                // When logging out, a pop animation feels intuitive
                // You can remove this if you want the default 'push' animation
              }}
            />
          ) : (
            // User is signed in
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
