import React, { Component } from "react";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import LinkingConfiguration from "./navigation/LinkingConfiguration";
import Login from "./Login";
import BottomTabNavigator from "./navigation/BottomTabNavigator";

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.username != "" && state.user.password != "",
  };
};

class Navigator extends Component {
  render() {
    const { Stack, loggedIn } = this.props;
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

export default connect(mapStateToProps)(Navigator);
