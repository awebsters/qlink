import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator} from "react-native";
import Colors from "../constants/Colors";
export default class FoodMenu extends Component {

  state = {data: [], isLoading: true}

  componentDidMount() {
    fetch('http://miranda.caslab.queensu.ca/GetMeals')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.data });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  meal(item) {
    var nam = Object.keys(item)[0];
    return (
      <View style={styles.container}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={styles.title}>{nam}</Text>
        </View>
        <View style={styles.boxText}>
          <FlatList
            ListHeaderComponent={<View style={{ margin: 6 }}></View>}
            ListFooterComponent={<View style={{ margin: 12 }}></View>}
            ItemSeparatorComponent={() => <View style={styles.lineStyle}></View>}
            data={item[nam]}
            renderItem={({ item }) => (
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 10,
                    alignItems: "left",
                    justifyContent: "space-between"
                  }}
                >
                  <Text style={styles.menuTitle} adjustsFontSizeToFit={true}>{Object.keys(item)[0]}</Text>
                  <FlatList
                    data={item[Object.keys(item)[0]]}
                    renderItem={({ item }) => (
                      <Text style ={styles.menu}>{item}</Text>
                    )}
                  />
                </View>
                
              </View>
            )}
          />
        </View>
      </View>
    );
  }
  
  render() {

    const { data, isLoading} = this.state;

      return (

        <View style={{ flex: 1, justifyContent: "center"}}>
          {isLoading ? <ActivityIndicator/> : (
            <FlatList
              ItemSeparatorComponent={() => <View style={{ margin: 10 }} />}
              contentContainerStyle={{ padding: 40 }}
              vertical={true}
              data={data[this.props.option]}
              renderItem={({ item }) => this.meal(item)}
            />
          )}
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
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
    textAlignVertical: "top",
    textAlign: "auto",
    width: 90,
    marginTop:40,
    fontSize: 18,
    fontFamily: "poppins-regular",
    color: "white",
    transform: [{ rotate: "-90deg" }],
  },
  boxText: {
    borderRadius: 20,
    backgroundColor: "#fff",
    flex: 8,
  },
  menuTitle: {
    textAlign: "left",
    left: "5%",
    fontFamily: "poppins-medium",
    color: Colors.header,
    width:80,
    height:60,
    position: "absolute"
    
  },
  menu: {
    textAlign: "left",
    fontSize: 14,
    fontFamily: "poppins-regular",
    color: Colors.header,
    marginLeft: 90,


    
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: Colors.header,
    marginTop:25,
    margin: 14,
    opacity: 0.2,
  },
  loading: {
    flex: 1,
    justifyContent: "center"
  },
});
