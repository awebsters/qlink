import * as WebBrowser from "expo-web-browser";
import React from "react";
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
import YourClass from "../components/YourCourses";

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
            <NextClass style={styles.content_section} paddingTop={30} />

            <Text style={styles.header}>Your Courses</Text>
            <YourClass style={styles.content_section} />
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
    fontFamily: "poppins-medium",
    fontSize: 30,
  },
  date: {
    fontFamily: "poppins-mediumitalic",
    fontSize: 18,
    color: Colors.header,
    paddingTop: 10,
  },
  header: {
    fontFamily: "poppins-medium",
    fontSize: 24,
    color: Colors.header,
    paddingTop: 30,
  },

  content_section: {
    paddingTop: 20,
  },
});
