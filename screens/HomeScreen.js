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

import { useDispatch } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import moment from "moment";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import NextClass from "../components/NextClass";
import YourClass from "../components/YourCourses";
import { updateLogin } from "../data/redux/user";

export default function HomeScreen() {
  const dispatch = useDispatch();

  logoutUser = () => {
    dispatch(updateLogin("", ""));
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.primary, Colors.secondary]}
        style={{ flex: 1 }}
      >
        <View style={styles.toolbar}>
          <Text style={styles.title}>Home</Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <TouchableOpacity style={{ padding: 2 }} onPress={logoutUser}>
              <MaterialCommunityIcons
                style={styles.headerButton}
                name="logout"
                color="black"
                size={30}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.date}>
            {moment().format("dddd, MMMM Do, YYYY")}
          </Text>
          <Text style={styles.header}>Next Class</Text>
          <NextClass style={styles.content_section} paddingTop={30} />

          <Text style={styles.header}>Your Courses</Text>
          <YourClass style={styles.content_section} />
        </ScrollView>
      </LinearGradient>
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

  toolbar: {
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
  },
  title: {
    fontFamily: "poppins-medium",
    fontSize: 30,
  },
  headerButton: {
    paddingLeft: 10,
  },

  content: {
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
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
