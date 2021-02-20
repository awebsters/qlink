import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import moment from "moment";

import Colors from "../../constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default class CourseModal extends Component {
  render() {
    const { selectedItem } = this.props;

    let codeSplit = selectedItem.code.split(" ");
    let displayCode = codeSplit[0] + " " + codeSplit[1];

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={() => {
          this.props.onDismiss();
        }}
      >
        <TouchableWithoutFeedback onPress={this.props.onDismiss}>
          <View style={styles.container}>
            <MaterialCommunityIcons
              style={styles.close}
              name="close"
              color="white"
              size={40}
            />
            <View style={styles.innerContainer}>
              <Image
                style={styles.image}
                source={{ uri: "https://picsum.photos/300/300" }}
              />
              <View style={styles.textWrapper}>
                <View
                  style={{
                    alignSelf: "center",
                    paddingBottom: 15,
                  }}
                >
                  <Text style={styles.title}>{displayCode}</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <View style={styles.left_underline} />
                    <View style={styles.right_underline} />
                  </View>
                </View>
                <View style={styles.times}>
                  <MaterialCommunityIcons name="alarm" size={25} />
                  <Text style={styles.info_text}>
                    {Object.keys(selectedItem.Dates).join("\n")}
                  </Text>
                  <Text style={styles.info_text}>
                    {this.buildTimesString(selectedItem.Dates)}
                  </Text>
                </View>
                <View style={styles.location}>
                  <MaterialCommunityIcons name="map-marker" size={25} />
                  <Text style={styles.info_text}>{selectedItem.Location}</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }

  buildTimesString = (dateInfo) => {
    var times = "";
    for (var days of Object.keys(dateInfo)) {
      let start = moment(dateInfo[days][0]).format("HH:mm");
      let end = moment(dateInfo[days][1]).format("HH:mm");
      times += start + " - " + end + "\n";
    }
    return times;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  innerContainer: {
    borderRadius: 10,
  },
  textWrapper: {
    backgroundColor: "white",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 30,
  },
  close: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  image: {
    width: null,
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    resizeMode: "cover",
  },

  title: {
    fontFamily: "poppins-medium",
    fontSize: 30,
    color: Colors.header,
    textAlign: "center",
  },

  left_underline: {
    backgroundColor: "#5C75DD",
    height: 5,
    flex: 0.55,
  },
  right_underline: {
    backgroundColor: "#E1B2FF",
    height: 5,
    flex: 0.35,
  },

  times: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 30,
    paddingRight: 30,
  },
  location: {
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "row",
  },
  info_text: {
    fontSize: 15,
    fontFamily: "poppins-regular",
    color: Colors.header,
    paddingLeft: 20,
  },
});
