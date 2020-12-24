import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

import { updateLogin } from "./data/redux/user";
import Colors from "./constants/Colors";

const mapStateToProps = (state) => {
  return {};
};

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    loading: false,
    message: "",
  };

  render() {
    var login = async () => {
      this.setState({ ...this.state, loading: true });
      const { dispatch } = this.props;

      try {
        let formdata = new FormData();

        formdata.append("username", this.state.email);
        formdata.append("password", this.state.password);

        const response = await fetch("http://miranda.caslab.queensu.ca/Login", {
          method: "post",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: formdata,
        });

        const json = await response.json();
        if (json.Result == "Success") {
          dispatch(
            updateLogin(this.state.email, this.state.password, json.URL)
          );
        } else {
          this.setState({
            ...this.state,
            loading: false,
            message: "Error: invalid username and password combination",
          });
        }
      } catch (e) {
        this.setState({
          ...this.state,
          loading: false,
          message:
            "Error: Please check your internet connection or try again later",
        });
      }
    };

    return (
      <LinearGradient
        colors={[Colors.loginPrimary, Colors.loginSecondary]}
        style={styles.container}
      >
        <Text style={styles.title}>Sign In</Text>
        <View style={styles.box}>
          <Text>{this.state.message}</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Email..."
              placeholderTextColor="#003f5c"
              onChangeText={(text) => this.setState({ email: text })}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Password..."
              placeholderTextColor="#003f5c"
              onChangeText={(text) => this.setState({ password: text })}
            />
          </View>
          <ActivityIndicator animating={this.state.loading} />
          <TouchableOpacity style={styles.loginBtn} onPress={login}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    justifyContent: "flex-end",
  },
  box: {
    backgroundColor: "white",
    height: "75%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 40,
  },
  title: {
    fontFamily: "poppins-medium",
    fontSize: 40,
    color: "white",
    paddingLeft: 25,
    paddingBottom: 25,
  },
  inputView: {
    borderBottomColor: "#5cddd8",
    borderBottomWidth: 1,
    height: 50,
    marginBottom: 20,
  },
  inputText: {
    height: 50,
    color: "white",
    color: "black",
  },
  forgot: {
    color: "white",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#5c75dd",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    alignItems: "center",
  },
  loginText: {
    color: "white",
  },
});
