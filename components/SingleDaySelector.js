import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import moment from "moment";

import Colors from "../constants/Colors";
import { updateClasses, updateDay } from "../data/redux/schedule";
import SchoolClass from "../data/model/SchoolClass";

const mapStateToProps = (state) => {
  return { selectedDay: moment(state.schedule.selectedDay) };
};

class SingleDaySelector extends Component {
  render() {
    const { day, selectedDay, dispatch } = this.props;

    return (
      <TouchableOpacity
        onPress={() => {
          dispatch(updateDay(day));
          // this.selectDay(day);
        }}
      >
        <View
          style={{
            backgroundColor:
              day.format("YYYY-MM-DD") == selectedDay.format("YYYY-MM-DD")
                ? "white"
                : "transparent",
            borderRadius: 20,
            padding: 5,
          }}
        >
          <Text style={styles.day}>{day.format("dddd")[0]}</Text>
          <Text style={styles.day}>{day.date()}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  componentDidMount() {
    // When the component mounts, we loading schedule for the first time and need to fetch
    // today's dates classes
    this.selectDay(this.props.selectedDay);
  }

  componentDidUpdate(prevProps) {
    console.log(this.props);
    console.log(prevProps);
    // If the selectedDay has been updated we must fetch the class data for the new state
    if (
      prevProps.selectedDay.format("YYYY-MM-DD") !=
      this.props.selectedDay.format("YYYY-MM-DD")
    ) {
      console.log("here");
      this.selectDay(this.props.selectedDay);
    }
  }

  selectDay = async (moment) => {
    try {
      let formdata = new FormData();

      formdata.append("icsUrl", this.props.url);
      formdata.append("Year", moment.year());
      formdata.append("Month", moment.month() + 1);
      formdata.append("Day", moment.date());

      const response = await fetch(
        "http://miranda.caslab.queensu.ca/GetTodaysCourses",
        {
          method: "post",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: formdata,
        }
      );

      const json = await response.json();

      var i = 1;

      var classes = [];
      var c;
      for (var name of Object.keys(json)) {
        c = new SchoolClass(name, json[name].Starts, json[name].Location);
        classes.push({ id: i.toString(), schoolClass: c });
        i++;
      }
      this.props.dispatch(updateClasses(classes));
    } catch (e) {
      console.log(e);
    }
  };
}

export default connect(mapStateToProps)(SingleDaySelector);

const styles = StyleSheet.create({
  day: {
    fontFamily: "poppins-medium",
    fontSize: 20,
    color: Colors.header,
    paddingBottom: 10,
  },
});
