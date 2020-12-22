import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import Colors from "../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { Button, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function FoodScreen() {
  var tamVar = 1;
  var flexVar = 1;
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
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
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                paddingLeft: 10,
              }}
            >
              <Text style={styles.headerText}>TAMs: {tamVar}</Text>
              <Text style={styles.headerText}>Flex$: {flexVar}</Text>
            </View>
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
                <Button color={Colors.header} title="Leonard" />
                <Button color={Colors.header} title="Ban Righ" />
                <Button color={Colors.header} title="Jean Royce" />
              </View>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
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

