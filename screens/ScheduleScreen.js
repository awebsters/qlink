import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import React, { useState, Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/Colors";
import moment from "moment";
import { TouchableOpacity } from "react-native";

export default class ScheduleScreen extends Component {
  state = {
    m: moment(),
  };
  render() {
    console.log("rendering schedule");
    const [m] = this.state;

    var singleDayView = (x, y) => {
      return (
        <View>
          <Text style={styles.day}>{x}</Text>
          <Text style={styles.day}>{y}</Text>
        </View>
      );
    };

    var daysSelectorContianer = () => {
      var mn = m.clone();
      var from_date = mn.startOf("week");
      return (
        <View
          style={{
            justifyContent: "space-evenly",
            flexDirection: "row",
            padding: 15,
          }}
        >
          {singleDayView("S", from_date.format("D"))}
          {singleDayView("M", from_date.add(1, "days").format("D"))}
          {singleDayView("T", from_date.add(1, "days").format("D"))}
          {singleDayView("W", from_date.add(1, "days").format("D"))}
          {singleDayView("T", from_date.add(1, "days").format("D"))}
          {singleDayView("F", from_date.add(1, "days").format("D"))}
          {singleDayView("S", from_date.add(1, "days").format("D"))}
        </View>
      );
    };

    return (
      <LinearGradient
        colors={[Colors.loginPrimary, Colors.loginSecondary]}
        style={styles.container}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              console.log("heree");
              m.add(-1, "weeks");
            }}
          >
            <MaterialCommunityIcons name="arrow-left" color="white" size={30} />
          </TouchableOpacity>
          <Text style={styles.month}>{m.format("MMMM, YYYY")}</Text>
          <MaterialCommunityIcons name="arrow-right" color="white" size={30} />
        </View>
        {daysSelectorContianer()}
        <View style={styles.box}>
          <Text style={styles.title}>Schedule</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "grey",
  },
  box: {
    backgroundColor: "white",
    height: "70%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 40,
  },
  title: {
    fontFamily: "poppins-medium",
    fontSize: 30,
    color: Colors.header,
    borderBottomColor: "#7CEAE2", // Add this to specify bottom border color
    borderBottomWidth: 5,
  },
  month: {
    fontFamily: "poppins-medium",
    fontSize: 25,
    color: Colors.header,
    paddingRight: 10,
    paddingLeft: 10,
  },
  day: {
    fontFamily: "poppins-medium",
    fontSize: 20,
    color: Colors.header,
    paddingBottom: 10,
  },
});
