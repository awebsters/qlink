import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ImageBackground,
  Platform,
  Modal,
} from "react-native";
import { connect } from "react-redux";

import { updateCourses } from "../data/redux/courses";
import {
  TouchableOpacity,
  TouchableHighlight,
} from "react-native-gesture-handler";
import CourseModal from "./modals/CourseModal";

const mapStateToProps = (state) => {
  return {
    url: state.user.schedule_url,
    classes: state.courses.classes,
  };
};

class YourCourses extends Component {
  state = {
    isModalVisible: false,
    selectedItem: null,
  };

  _hideModal = () => this.setState({ isModalVisible: false });

  _showModal = (item) =>
    this.setState({ isModalVisible: true, selectedItem: item });

  Item(item) {
    let codeSplit = item.course.code.split(" ");
    let displayCode = codeSplit[0] + " " + codeSplit[1];

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this._showModal(item.course)}>
          <ImageBackground
            source={{ uri: "https://picsum.photos/300/300" }}
            style={styles.image}
            blurRadius={Platform.OS === "android" ? 1 : 5}
            borderRadius={20}
          >
            <Text style={styles.paragraph}>{displayCode}</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const { selectedItem, isModalVisible } = this.state;
    const { style, classes } = this.props;

    return (
      <View style={style}>
        {selectedItem != null && (
          <CourseModal
            selectedItem={selectedItem}
            modalVisible={isModalVisible}
            onDismiss={this._hideModal}
          ></CourseModal>
        )}

        <FlatList
          horizontal={true}
          data={classes}
          renderItem={({ item }) => this.Item(item)}
        />
      </View>
    );
  }

  componentDidMount() {
    if (this.props.classes.length == 0) {
      this.loadCourses();
    }
  }

  loadCourses = async () => {
    this.setState({ isLoading: true });
    try {
      let formdata = new FormData();

      formdata.append("icsUrl", this.props.url);
      const response = await fetch(
        "http://miranda.caslab.queensu.ca/GetWeeksCourses",
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
      for (var name of Object.keys(json)) {
        var c = json[name];
        c["code"] = name;
        classes.push({ id: i.toString(), course: c });
        i++;
      }

      if (classes.length == 0) {
        this.setState({
          isLoading: false,
          message: "You aren't taking any classes!",
        });
      } else {
        this.setState({ isLoading: false, message: "" });
      }

      this.props.dispatch(updateCourses(classes));
    } catch (e) {
      this.setState({
        isLoading: false,
        message: "Please check your internet connection or try again later.",
      });
      console.log(e);
    }
  };
}

export default connect(mapStateToProps)(YourCourses);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    paddingRight: 10,
    borderRadius: 20,
  },
  image: {
    flexGrow: 1,
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  paragraph: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "poppins-regular",
    color: "white",
  },
});
