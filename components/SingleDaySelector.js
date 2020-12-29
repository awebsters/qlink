import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { updateClasses } from "./data/redux/schedule";

async function selectDay(moment) {
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
  } catch (e) {
    console.log(e);
  }
}

function SingleDaySelector(props) {
  const { day, selectedDay } = props;

  return (
    <TouchableOpacity
      onPress={() => {
        selectDay(day);
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

export default connect(mapStateToProps)(SingleDaySelector);
