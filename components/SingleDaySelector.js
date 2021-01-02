import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import moment from "moment";

import Colors from "../constants/Colors";
import { updateDay } from "../data/redux/schedule";

const mapStateToProps = (state) => {
  return { selectedDay: moment(state.schedule.selectedDay) };
};

class SingleDaySelector extends Component {
  render() {
    const { day, selectedDay, onSelect, dispatch } = this.props;

    return (
      <TouchableOpacity
        onPress={() => {
          dispatch(updateDay(day));
          // this.selectDay(day);
          onSelect(day);
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
