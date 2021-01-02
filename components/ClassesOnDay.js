import React, { Component } from "react";
import { ActivityIndicator } from "react-native";
import { FlatList } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";

import Colors from "../constants/Colors";
export default class ClassesOnDay extends Component {
  state = {};

  Item(item) {
    const { code, time, location } = item.schoolClass;
    return (
      <View style={styles.container}>
        <View style={styles.picture}>
          <Image
            style={styles.image}
            source={{ uri: "https://picsum.photos/300/300" }}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>{code}</Text>
          <Text style={styles.time}>
            {time}
            {"\n"}
            {location}
          </Text>
        </View>
      </View>
    );
  }

  render() {
    const { classes, styles, isLoading } = this.props;
    if (isLoading) {
      return <ActivityIndicator />;
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
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 5,
    marginRight: 5,
  },
  title: {
    fontFamily: "poppins-medium",
    fontSize: 18,
    color: Colors.paragraph,
  },
  time: {
    fontFamily: "poppins-regular",
    fontSize: 14,
    color: Colors.paragraph,
  },
});
