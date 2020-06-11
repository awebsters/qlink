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
import moment from "moment";

import Colors from "../constants/Colors";
import NextClass from "../components/NextClass";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <LinearGradient
          colors={[Colors.primary, Colors.secondary]}
          style={{ flex: 1 }}
        >
          <View style={styles.content}>
            <Text style={styles.title}>Home</Text>
            <Text style={styles.date}>
              {moment().format("dddd, MMMM Do, YYYY")}
            </Text>
            <Text style={styles.header}>Next Class</Text>

            {/* Next Class Component */}
            <NextClass style={styles.nextClass} paddingTop={30} />
            <Text style={styles.header}>Your Courses</Text>
          </View>
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
  content: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 20,
    flex: 1,
  },
  title: {
    fontFamily: "nunito-black",
    fontSize: 30,
  },
  date: {
    fontFamily: "nunito-semibolditalic",
    fontSize: 18,
    color: Colors.header,
    paddingTop: 10,
  },
  header: {
    fontFamily: "nunito-bold",
    fontSize: 24,
    color: Colors.header,
    paddingTop: 30,
  },

  nextClass: {
    paddingTop: 20,
  },
});
