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

import Colors from "../constants/Colors";
import {
  TouchableOpacity,
  TouchableHighlight,
} from "react-native-gesture-handler";

export default class FoodMenu extends Component {
  state = {
    data: [],
  };

  meal(item) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this._showModal(item)}>
          <ImageBackground
            source={{ uri: item.image }}
            style={styles.image}
            blurRadius={Platform.OS === "android" ? 1 : 5}
            borderRadius={20}
          >
            <Text style={styles.paragraph}>{item.code}</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const { data } = this.state;

    <FlatList
      horizontal={true}
      data={data}
      renderItem={({ item }) => this.meal(item)}
    />;
  }
}
