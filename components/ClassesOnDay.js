import React, { Component } from "react";
import { ActivityIndicator } from "react-native";
import { FlatList } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";
import moment from "moment";

import Colors from "../constants/Colors";
export default class ClassesOnDay extends Component {
  state = {};

  Item(item) {
    const { code, time, location, endTime } = item.schoolClass;
    let codeSplit = code.split(" ");
    let displayCode = codeSplit[0] + " " + codeSplit[1];
    
    return (
      <View style={styles.container}>
        <View style={styles.picture}>
          <Image
            style={styles.image}
            source={{ uri: "https://picsum.photos/300/300" }}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>{displayCode}</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.time}>
              {moment(time).format("HH:mm") +
                " - " +
                moment(endTime).format("HH:mm")}
              {"\n"}
              {location}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  render() {
    const { classes, styles, isLoading, message } = this.props;

    if (isLoading) {
      return <ActivityIndicator />;
    } else if (message) {
      return <Text>{message}</Text>;
    }
    return (
      <FlatList
        style={styles}
        data={classes}
        renderItem={({ item }) => this.Item(item)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 2,
    marginBottom: 20,
  },
  image: {
    flex: 1,
    width: undefined,
    height: 100,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    resizeMode: "cover",
  },
  picture: {
    flex: 1,
    borderRadius: 20,
  },
  info: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
    marginRight: 5,
  },
  title: {
    fontFamily: "poppins-medium",
    fontSize: 20,
    color: Colors.paragraph,
  },
  time: {
    paddingLeft: 10,
    fontFamily: "poppins-regular",
    fontSize: 15,
    color: Colors.paragraph,
  },
});
