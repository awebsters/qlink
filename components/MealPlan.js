import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";


import Colors from "../constants/Colors";
export default class MealPlan extends Component {

    state = {
        tams:1,
        flex:1,
    };

    render(){
        const { tams, flex } = this.state;
        return(
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                paddingLeft: 10,
              }}
            >
              <Text style={styles.headerText}>TAMs: {tams}</Text>
              <Text style={styles.headerText}>Flex$: {flex}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerText: {
      fontFamily: "poppins-medium",
      fontSize: 18,
      color: Colors.header,
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 40,
      paddingBottom: 15,
    }
  });
  
  