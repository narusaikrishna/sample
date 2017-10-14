//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableHighlight
} from "react-native";

// create a component
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      isVisiblity: false,

    };
  }
  onValidation=()=>{

  }
  onLogin = () => {};
  render() {
    const opneText = this.props.textOnOpen;
    return (
      <View style={styles.container}>
        <Text>LoginForm</Text>
        <View style={{ justifyContent: "center" }}>
          <Text> userName</Text>

          <TextInput
            style={styles.textInput}
            onChangeText={name => {
              console.log(name);
              this.setState({ name });
            }}
            value={this.state.name}
          />

          <Text style={{ textAlign: "left" }}> password</Text>

          <View>
            <TextInput
              style={styles.textInput}
              autoCorrect={false}
              keyboardType={"email-address"}
              secureTextEntry={this.state.isVisiblity}
              onChangeText={password => {
                this.setState({ password });
              }}
              value={this.state.password}
            />
            <TouchableHighlight
              onPress={() => {
                this.setState({ isVisiblity: !this.state.isVisiblity });
              }}
            >
              <Text>show</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View
          style={{
            width: 300,
            height: 50,
            justifyContent: "center",
            backgroundColor: "#841584",
            marginTop: 15
          }}
        >
          <Button title={`${opneText}`} onPress={this.onLogin} color="black" />
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  textInput: {
    height: 40,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10
  }
});

//make this component available to the app
export default LoginForm;

