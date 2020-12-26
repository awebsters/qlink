import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";

import Colors from "../constants/Colors";
export default class FoodMenu extends Component {
  state = {
      data: [
        {
          BreakFast: [
            {Pastry: ["Croissant", "Muffins"]},
            {Classics: ["Eggs", "Ham", "Potatoes"]},
            {Entree: ["Soup", "Crackers", "Bread"]},
            {Entree: ["Soup", "Crackers", "Bread"]}
        ]
      },
        {
          Lunch: [
            {Pastry: ["Croissant", "Muffins"]},
            {Classics: ["Eggs", "Ham", "Potatoes"]},
            {Entree: ["Soup", "Crackers", "Bread"]}
        ]
      },
      {
        Dinner: [
          {Pastry: ["Croissant", "Muffins"]},
          {Classics: ["Eggs", "Ham", "Potatoes"]},
          {Entree: ["Soup", "Crackers", "Bread"]}
      ]},
      ],
      Menu:"Leonard"
  };

  meal(item) {
    var nam = Object.keys(item)[0];
    return (
      <View style={styles.container}>
        
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text style={styles.title}>{nam}</Text></View>
       <View style={styles.boxText}>
       <FlatList
        ListHeaderComponent={<View style={{margin:6}}></View>}
        data={item[nam]}
        renderItem={({ item }) =>  
        <View>
          <View style={{flexDirection: "row", justifyContent: "flex-start",
                paddingLeft: 10}}>
            <Text style={styles.menuTitle}>{Object.keys(item)[0]}</Text>
            <FlatList
                  data={item[Object.keys(item)[0]]}
                  renderItem={({ item }) => <Text style={styles.menu}>{item}</Text>}
                />
                </View>
                <View style = {styles.lineStyle}></View>
               </View>
          }
                />
          </View>
        </View>
    );
  }

  render() {
    const { data } = this.state;
    return (
      <View style={{flex:1}}>
    <FlatList
      ItemSeparatorComponent={() => <View style={{ margin: 10 }} />}
      contentContainerStyle={{ padding: 40 }}
      vertical={true}
      data={data}
      renderItem={({ item }) => this.meal(item)}
    />

  </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: "#7CEAE2",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2
  },
  title: {
    width: 90,
    bottom: "34%",
    fontSize: 18,
    fontFamily: "poppins-regular",
    color: "white",
    transform: [{ rotate: "-90deg" }],
    
  },
  boxText: {
    borderRadius: 20,
    backgroundColor: "#fff",
    flex: 8
  },
  menuTitle: {
    textAlign: "left",
    left:"10%",
    fontSize: 17,
    fontFamily: "poppins-medium",
    color: Colors.header,
    flex: 0.5
  },
  menu: {
    textAlign: "left",
    fontSize: 14,
    fontFamily: "poppins-regular",
    color: Colors.header,
    flex: 1
  },
  lineStyle:{
        borderWidth: 0.5,
        borderColor: Colors.header,
        margin:10,
        opacity:.2
   }
});