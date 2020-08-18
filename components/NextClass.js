import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Colors from "../constants/Colors";

export default class NextClass extends Component {
  state = {
    code: "CISC220",
    name: "System Level Programming",
    time: "12:30 pm - 1:30 pm",
    room: "Kin and Health 100",
  };

  render() {
    const { code, name, time, room } = this.state;
    const { style } = this.props;

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
}

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
