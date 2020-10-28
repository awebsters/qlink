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
    currentWeek: moment(),
    selectedDay: moment(),
  };
  render() {
    console.log("rendering schedule");
    const { currentWeek } = this.state;
    console.log(this.state);

    var singleDayView = (date) => {
      return (
        <TouchableOpacity
          onPress={() => {
            this.setState({ ...this.state, selectedDay: date });
          }}
        >
          <View
            style={{
              backgroundColor:
                date.format("YYYY-MM-DD") ==
                this.state.selectedDay.format("YYYY-MM-DD")
                  ? "white"
                  : "clear",
              borderRadius: 20,
              padding: 5,
            }}
          >
            <Text style={styles.day}>{date.format("dddd")[0]}</Text>
            <Text style={styles.day}>{date.date()}</Text>
          </View>
        </TouchableOpacity>
      );
    };

    var daysSelectorContianer = () => {
      var from_date = currentWeek.clone().startOf("week");
      return (
        <View
          style={{
            justifyContent: "space-evenly",
            flexDirection: "row",
            padding: 15,
          }}
        >
          {singleDayView(from_date.clone())}
          {singleDayView(from_date.add(1, "days").clone())}
          {singleDayView(from_date.add(1, "days").clone())}
          {singleDayView(from_date.add(1, "days").clone())}
          {singleDayView(from_date.add(1, "days").clone())}
          {singleDayView(from_date.add(1, "days").clone())}
          {singleDayView(from_date.add(1, "days").clone())}
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
              console.log("today");
              this.setState({ ...this.state, currentWeek: moment() });
            }}
            style={{ position: "absolute", left: 0, top: 3 }}
          >
            <MaterialCommunityIcons
              name="calendar-today"
              color="white"
              size={25}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log("back");
              this.setState({
                ...this.state,
                currentWeek: currentWeek.add(-1, "weeks"),
              });
            }}
          >
            <MaterialCommunityIcons name="arrow-left" color="white" size={30} />
          </TouchableOpacity>
          <Text style={styles.month}>{currentWeek.format("MMMM, YYYY")}</Text>
          <TouchableOpacity
            onPress={() => {
              console.log("forward");
              this.setState({
                ...this.state,
                currentWeek: currentWeek.add(1, "weeks"),
              });
            }}
          >
            <MaterialCommunityIcons
              name="arrow-right"
              color="white"
              size={30}
            />
          </TouchableOpacity>
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
