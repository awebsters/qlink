import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { MonoText } from "../components/StyledText";
import Colors from "../constants/Colors";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <LinearGradient
          colors={[Colors.primary, Colors.secondary]}
          style={{ flex: 1 }}
        >
          <Text style={{ fontFamily: "nunito-black" }}>Home</Text>
        </LinearGradient>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    flex: 1,
    paddingTop: 30,
  },
});
