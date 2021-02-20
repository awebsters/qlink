import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import moment from "moment";
import { connect } from "react-redux";

import Colors from "../constants/Colors";
import ClassesOnDay from "../components/ClassesOnDay";
import SingleDaySelector from "../components/SingleDaySelector";
import { updateClasses, updateDay } from "../data/redux/schedule";
import SchoolClass from "../data/model/SchoolClass";

const mapStateToProps = (state) => {
  return {
    url: state.user.schedule_url,
    classes: state.schedule.classes,
    selectedDay: moment(state.schedule.selectedDay),
  };
};

class ScheduleScreen extends Component {
  state = {
    currentWeek: moment(),
    isLoading: false,
    message: "",
  };

  render() {
    const { currentWeek, isLoading, message } = this.state;
    const { classes, dispatch } = this.props;

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
              this.setState({ currentWeek: moment() });
              dispatch(updateDay(moment()));
              this.selectDay(moment());
            }}
            style={{ position: "absolute", left: 10, top: 3 }}
          >
            <MaterialCommunityIcons
              name="calendar-today"
              color="white"
              size={25}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({ currentWeek: currentWeek.add(-1, "weeks") });
            }}
          >
            <MaterialCommunityIcons name="arrow-left" color="white" size={30} />
          </TouchableOpacity>
          <Text style={styles.month}>{currentWeek.format("MMMM, YYYY")}</Text>
          <TouchableOpacity
            onPress={() => {
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
        {this.daysSelectorContianer()}
        <View style={styles.box}>
          <Text style={styles.title}>Schedule</Text>
          <ClassesOnDay
            isLoading={isLoading}
            classes={classes}
            styles={styles.Classes}
            message={message}
          />
        </View>
      </LinearGradient>
    );
  }

  daysSelectorContianer = () => {
    var week_start = this.state.currentWeek.clone().startOf("week");
    return (
      <View
        style={{
          justifyContent: "space-evenly",
          flexDirection: "row",
          padding: 15,
        }}
      >
        <SingleDaySelector day={week_start.clone()} onSelect={this.selectDay} />
        <SingleDaySelector
          day={week_start.add(1, "days").clone()}
          onSelect={this.selectDay}
        />
        <SingleDaySelector
          day={week_start.add(1, "days").clone()}
          onSelect={this.selectDay}
        />
        <SingleDaySelector
          day={week_start.add(1, "days").clone()}
          onSelect={this.selectDay}
        />
        <SingleDaySelector
          day={week_start.add(1, "days").clone()}
          onSelect={this.selectDay}
        />
        <SingleDaySelector
          day={week_start.add(1, "days").clone()}
          onSelect={this.selectDay}
        />
        <SingleDaySelector
          day={week_start.add(1, "days").clone()}
          onSelect={this.selectDay}
        />
      </View>
    );
  };

  componentDidMount() {
    this.selectDay(moment());
  }

  selectDay = async (moment) => {
    this.setState({ isLoading: true });
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
        c = new SchoolClass(
          name,
          json[name].Starts,
          json[name].Ends,
          json[name].Location
        );
        classes.push({ id: i.toString(), schoolClass: c });
        i++;
      }

      if (classes.length == 0) {
        this.setState({
          isLoading: false,
          message: "You have no classes today!",
        });
      } else {
        this.setState({ isLoading: false, message: "" });
      }
      this.props.dispatch(updateClasses(classes));
    } catch (e) {
      this.setState({
        isLoading: false,
        message: "Please check your internet connection or try again later.",
      });
      console.log(e);
    }
  };
}

export default connect(mapStateToProps)(ScheduleScreen);

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
    padding: 30,
  },
  title: {
    fontFamily: "poppins-medium",
    fontSize: 30,
    color: Colors.header,
    borderBottomColor: "#7CEAE2", // Add this to specify bottom border color
    borderBottomWidth: 5,
    marginBottom: 20,
  },
  month: {
    fontFamily: "poppins-medium",
    fontSize: 25,
    color: Colors.header,
    paddingRight: 10,
    paddingLeft: 10,
  },
  Classes: {
    flex: 1,
  },
});
