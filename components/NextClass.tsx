import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import moment from "moment";

import Colors from "../constants/Colors";
import SchoolClass from "../data/model/SchoolClass";

const mapStateToProps = (state) => {
  return {
    url: state.user.schedule_url,
  };
};

class NextClass extends Component {
  state = {
    isLoading: true,
    message: "",
    nextClass: null,
  };

  render() {
    const { isLoading, message, nextClass } = this.state;
    const { style } = this.props;

    if (isLoading) {
      return <ActivityIndicator />;
    } else if (message) {
      return <Text>{message}</Text>;
    }

    const { code, name, time, endTime, location } = nextClass;

    let codeSplit = code.split(" ");
    let displayCode = codeSplit[0] + " " + codeSplit[1];

    return (
      <View style={style}>
        <View style={styles.box}>
          <View style={styles.picture}>
            <Image
              style={styles.image}
              source={{ uri: "https://picsum.photos/300/300" }}
            />
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>{displayCode}</Text>
            <Text style={styles.time}>
              {moment(time).format("HH:mm") +
                " - " +
                moment(endTime).format("HH:mm")}
              {"\n"}
            </Text>
            <Text style={styles.room}>{location}</Text>
          </View>
        </View>
      </View>
    );
  }

  componentDidMount() {
    this.loadCourses();
  }

  loadCourses = async () => {
    try {
      let formdata = new FormData();

      const current = moment();

      formdata.append("icsUrl", this.props.url);
      formdata.append("Year", current.year());
      formdata.append("Month", current.month() + 1);
      formdata.append("Day", current.date());

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

      var nextClass = null;

      for (var name of Object.keys(json)) {
        let start = moment(json[name].Starts);
        let difference = moment.duration(start.diff(current)).asHours();

        if (current.isAfter(start)) {
          continue;
        } else if (
          nextClass == null ||
          difference < moment.duration(nextClass.start.diff(current)).asHours()
        ) {
          nextClass = new SchoolClass(
            name,
            json[name].Starts,
            json[name].Ends,
            json[name].Location
          );
        }
      }
      if (nextClass == null) {
        this.setState({
          isLoading: false,
          message: "You have no more classes!",
          nextClass: null,
        });
      } else {
        this.setState({ isLoading: false, message: "", nextClass: nextClass });
      }
    } catch (e) {
      this.setState({
        isLoading: false,
        message: "Please check your internet connection or try again later.",
      });
      console.log(e);
    }
  };
}

export default connect(mapStateToProps)(NextClass);

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "grey",
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  picture: {
    flex: 1,
    borderRadius: 20,
  },
  info: {
    flex: 2,
    marginLeft: 10,
  },

  image: {
    flex: 1,
    width: undefined,
    height: 200,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    resizeMode: "cover",
  },

  title: {
    fontFamily: "poppins-medium",
    fontSize: 24,
    color: Colors.paragraph,
  },
  subtitle: {
    fontFamily: "poppins-regular",
    fontSize: 14,
    color: Colors.paragraph,
  },
  time: {
    fontFamily: "poppins-regular",
    fontSize: 14,
    color: Colors.paragraph,
    paddingTop: 50,
  },
  room: {
    fontFamily: "poppins-regular",
    fontSize: 14,
    color: Colors.paragraph,
  },
});
