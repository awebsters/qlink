import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { username: state.user.username, password: state.user.password};
};
import Colors from "../constants/Colors";
import user from "../data/redux/user";
export class MealPlan extends Component {

    state = {
        tams:"",
        flex:"",
    };

    constructor(props){
      super(props);
    }

    componentDidMount() {
      try {
        let formdata = new FormData();

        formdata.append("username", this.props.username);
        formdata.append("password", this.props.password);
  
        fetch("http://miranda.caslab.queensu.ca/GetMealPlan",
        {
          method: "post",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: formdata,
        }
      )
          .then((response) => response.json())
          .then((json) => {
            this.setState({ tams: json.TAMS, flex: json.FLEX});
            
          })
          .catch((error) => console.error(error))
      }
         catch (error) {
        console.log(error);
      }
    }
      
     

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

  export default connect(
    mapStateToProps,
)(MealPlan);