import React from "react";
import Colors from "../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { Button, StyleSheet, Text, View } from "react-native";
import FoodMenu from "../components/FoodMenu";
import MealPlan from "../components/MealPlan";

export default class FoodScreen extends React.Component{

  constructor(props) {
    super(props);     
    this.state = {
      option: "Leonard"
    }; 
}  

  onButtonPress = (name) => {
    this.setState({
      option:name
    });
  }

  render(){

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.primary, Colors.secondary]}
        style={{ flex: 1 }}
      >
        <View style={styles.content}>
          <Text style={styles.header}>Your Balance</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingLeft: 20,
            }}
          >
            <View style={styles.underline} />
          </View>
          <MealPlan></MealPlan>
          <View style={styles.square}>
            <Text style={styles.header}>Menu</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                paddingLeft: 20,
              }}
            >
              <View style={styles.menuUnderline} />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                fontFamily: "poppins-light",
              }}
            >
              {/* <Button color={Colors.header} title="Leonard" />
              <Button color={Colors.header} title="Ban Righ" />
              <Button color={Colors.header} title="Jean Royce" /> */}
              <Button color={Colors.header} onPress={() => this.onButtonPress("Leonard")} title="Leonard" />
              <Button color={Colors.header} onPress={() => this.onButtonPress("Ban_Righ")} title="Ban Righ" />
              <Button color={Colors.header} onPress={() => this.onButtonPress("Jean_Royce")} title="Jean Royce" />
            </View>
            <FoodMenu option={this.state.option}/>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
  },
  underline: {
    backgroundColor: "#E1B2FF",
    height: 4,
    flex: 0.48,
  },
  menuUnderline: {
    backgroundColor: "#E1B2FF",
    height: 4,
    flex: 0.2,
  },
  header: {
    fontFamily: "poppins-medium",
    fontSize: 24,
    color: Colors.header,
    paddingTop: 30,
    paddingLeft: 21,
  },
  headerText: {
    fontFamily: "poppins-medium",
    fontSize: 18,
    color: Colors.header,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 40,
    paddingBottom: 15,
  },
  square: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flex: 1,
    backgroundColor: "white",
    alignSelf: "stretch",
  },
  options: {},

  content_section: {
    paddingTop: 20,
  },
});
