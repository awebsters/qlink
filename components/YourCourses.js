import React, { Component } from "react";
import {
  FlatList,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CourseModal from "./modals/CourseModal";

export default class NextClass extends Component {
  state = {
    data: [
      {
        id: "1",
        course: {
          image: "https://picsum.photos/300/300",
          code: "COMM 200",
          location: "Goodes RM 108",
          days: ["Monday", "Tuesday"],
          times: ["6:30pm - 9:30pm", "9:30pm - 10:30pm"],
        },
      },
      {
        id: "2",
        course: {
          image: "https://picsum.photos/300/300",
          code: "CISC 204",
          location: "Goodes RM 108",
          days: ["Monday", "Tuesday"],
          times: ["6:30pm - 9:30pm", "9:30pm - 10:30pm"],
        },
      },
      {
        id: "3",
        course: {
          image: "https://picsum.photos/300/300",
          code: "ARTH 253",
          location: "Goodes RM 108",
          days: ["Monday", "Tuesday"],
          times: ["6:30pm - 9:30pm", "9:30pm - 10:30pm"],
        },
      },
      {
        id: "4",
        course: {
          image: "https://picsum.photos/300/300",
          code: "PHIL 101",
          location: "Goodes RM 108",
          days: ["Monday", "Tuesday"],
          times: ["6:30pm - 9:30pm", "9:30pm - 10:30pm"],
        },
      },
      {
        id: "5",
        course: {
          image: "https://picsum.photos/300/300",
          code: "CISC 253",
          location: "Goodes RM 108",
          days: ["Monday", "Tuesday"],
          times: ["6:30pm - 9:30pm", "9:30pm - 10:30pm"],
        },
      },
    ],
    isModalVisible: false,
    selectedItem: null,
  };

  _hideModal = () => this.setState({ isModalVisible: false });

  _showModal = (item) =>
    this.setState({ isModalVisible: true, selectedItem: item });

  Item(item) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this._showModal(item.course)}>
          <ImageBackground
            source={{ uri: item.course.image }}
            style={styles.image}
            blurRadius={Platform.OS === "android" ? 1 : 5}
            borderRadius={20}
          >
            <Text style={styles.paragraph}>{item.course.code}</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const { data, selectedItem, isModalVisible } = this.state;
    const { style } = this.props;

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
          data={data}
          renderItem={({ item }) => this.Item(item)}
        />
      </View>
    );
  }
}

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
