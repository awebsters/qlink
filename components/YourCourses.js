import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ImageBackground,
  Platform,
} from "react-native";

import Colors from "../constants/Colors";

export default class NextClass extends Component {
  state = {
    data: [
      { id: "1", image: "https://picsum.photos/300/300", code: "COMM 200" },
      { id: "2", image: "https://picsum.photos/300/300", code: "CISC 204" },
      { id: "3", image: "https://picsum.photos/300/300", code: "ARTH 253" },
      { id: "4", image: "https://picsum.photos/300/300", code: "PHIL 101" },
      { id: "5", image: "https://picsum.photos/300/300", code: "CISC 235" },
    ],
  };

  Item({ code, image }) {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: image }}
          style={styles.image}
          blurRadius={Platform.OS === "android" ? 1 : 5}
          borderRadius={20}
        >
          <Text style={styles.paragraph}>{code}</Text>
        </ImageBackground>
      </View>
    );
  }

  render() {
    const { data } = this.state;
    const { style } = this.props;

    return (
      <View style={style}>
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
