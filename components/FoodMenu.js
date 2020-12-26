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
      data: [
        {
          BreakFast: [
            {Pastry: ["Croissant", "Muffins"]},
            {Classics: ["Eggs", "Ham", "Potatoes"]},
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
        
       <View style={{ alignItems: 'left', justifyContent: 'center' }}><Text style={styles.title}>{nam}</Text></View>
       <View style={styles.boxText}>
       <FlatList
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
      <View >
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
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
    fontSize: 18,
    fontFamily: "poppins-regular",
    color: "white",
    transform: [{ rotate: "-90deg" }]  


  },
  boxText: {
    borderRadius: 20,
    backgroundColor: "#fff",
    flex: 1
  },
  menuTitle: {
    textAlign: "left",
    fontSize: 17,
    fontFamily: "poppins-regular",
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
        borderColor:'black',
        margin:10,
        opacity:80
   }
});