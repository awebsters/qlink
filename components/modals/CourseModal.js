import React, { Component } from "react";
import { View, Text, StyleSheet, Modal, Image } from "react-native";

import Colors from "../../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

import { BlurView } from "expo-blur";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default class CourseModal extends Component {
  render() {
    const { selectedItem } = this.props;

    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.modalVisible}
          onRequestClose={() => {
            this.props.onDismiss();
          }}
        >
          <TouchableOpacity
            onPress={() => {
              console.log("here");
              this.props.onDismiss();
            }}
            style={{ backgroundColor: "red" }}
          >
            <MaterialCommunityIcons
              style={styles.close}
              name="close"
              color="white"
              size={40}
            />
          </TouchableOpacity>

          <View style={styles.container}>
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
                  <Text style={styles.title}>{selectedItem.code}</Text>
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
                  <Text style={styles.info_text}>{"Monday\nTuesday"}</Text>
                  <Text style={styles.info_text}>
                    {"6:30pm - 9:30pm\n9:30pm - 10:30pm"}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "transparent",
  },
  innerContainer: {
    borderRadius: 10,
  },
  textWrapper: {
    backgroundColor: "white",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 20,
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
    justifyContent: "space-evenly",
  },
  info_text: {
    fontSize: 15,
    fontFamily: "poppins-regular",
    color: Colors.header,
  },
});
