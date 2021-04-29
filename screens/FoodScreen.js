import React from "react";
import Colors from "../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { Button, StyleSheet, Text, View } from "react-native";
import FoodMenu from "../components/FoodMenu";
import MealPlan from "../components/MealPlan";

export default class FoodScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: "Leonard",
    };
  }

  _renderDot(name) {
    if (this.state.option == name) {
      return (
        <View>
          <Text style={styles.dot}>{"\u2B24"}</Text>
        </View>
      );
    } else {
      return null;
    }
  }

  onButtonPress = (name) => {
    this.setState({
      option: name,
    });
  };

  render() {
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
                  alignItems: "center",
                  fontFamily: "poppins-light",
                }}
              >
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    color={Colors.header}
                    onPress={() => this.onButtonPress("Leonard")}
                    title="Leonard"
                  />
                  {this._renderDot("Leonard")}
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    color={Colors.header}
                    onPress={() => this.onButtonPress("Ban_Righ")}
                    title="Ban Righ"
                  />
                  {this._renderDot("Ban_Righ")}
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    color={Colors.header}
                    onPress={() => this.onButtonPress("Jean_Royce")}
                    title="Jean Royce"
                  />
                  {this._renderDot("Jean_Royce")}
                </View>
              </View>
              <FoodMenu option={this.state.option} />
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
    width: 170,
  },
  menuUnderline: {
    backgroundColor: "#E1B2FF",
    height: 4,
    width: 72,
    // flex: 0.19,
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
  dot: {
    justifyContent: "center",
    alignItems: "flex-end",
    fontSize: 10,
    color: Colors.header,
  },
});
