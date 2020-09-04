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
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

import Colors from "../constants/Colors";
import NextClass from "../components/NextClass";
import YourClass from "../components/YourCourses";
import { updateLogin } from "../data/redux/user";

export default function HomeScreen() {
  const dispatch = useDispatch();

  accountMenuHandler = (value) => {
    if (value === "Logout") {
      this.logout();
    }
  };

  logout = () => {
    dispatch(updateLogin("", ""));
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <LinearGradient
          colors={[Colors.primary, Colors.secondary]}
          style={{ flex: 1 }}
        >
          <View style={styles.content}>
            <Text style={styles.title}>Home</Text>
            <MenuProvider style={styles.account}>
              <Menu onSelect={(value) => accountMenuHandler(value)}>
                <MenuTrigger>
                  <MaterialCommunityIcons
                    name="account-box"
                    color="black"
                    size={35}
                  />
                </MenuTrigger>

                <MenuOptions
                  customStyles={{
                    optionsContainer: { marginTop: 30, width: null },
                  }}
                >
                  <MenuOption value={"Logout"}>
                    <Text style={styles.menuContent}>Logout</Text>
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </MenuProvider>

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
    zIndex: 1,
    position: "absolute",
    top: 30,
    left: 10,
    height: null,
  },

  // TODO: Why is absolute positions being relative the textbox when the parent is the gradient??
  account: {
    flexDirection: "column",
    position: "absolute",
    top: 5,
    right: 0,
    zIndex: 2,
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
