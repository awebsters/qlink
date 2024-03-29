import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { PersistGate } from "redux-persist/integration/react";

import useCachedResources from "./hooks/useCachedResources";
import { store, persistor } from "./data/store";
import Navigator from "./Navigator";

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  renderLoading = () => (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={renderLoading()} persistor={persistor}>
          <Navigator Stack={Stack} />
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
