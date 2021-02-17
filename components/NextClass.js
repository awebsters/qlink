import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Colors from "../constants/Colors";

const mapStateToProps = (state) => {
  return {
    url: state.user.schedule_url,
    nextClass: state.courses.classes,
  };
};

class NextClass extends Component {
  state = {
    message: "",
  };

  render() {
    const { message } = this.state;
    const { style, nextClass } = this.props;

    const { code, name, time, room } = nextClass;

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
            <Text style={styles.title}>{code}</Text>
            <Text style={styles.subtitle}>{name}</Text>
            <Text style={styles.time}>{time}</Text>
            <Text style={styles.room}>{room}</Text>
          </View>
        </View>
      </View>
    );
  }

  componentDidMount() {
    this.loadCourses();
  }

  loadCourses = async () => {
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
