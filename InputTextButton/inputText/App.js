/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Keyboard,
  Alert,
  AppRegistry
} from "react-native";

import Button from "react-native-button";

export default class App extends Component {

  _onPressButton = () => {
    Alert.alert("You press the button");
  }

  constructor(props) {
    super(props);
    this.state = {
      typedText1: "type your input 1",
      typedPassword: "type your input 2",
      typedDescription: "Description"
    };
  }

  render() {
    return (
      // <View style={ { flex: 1, justifyContent: 'center', alignContent: 'center'} } >

      // </View>
      <View>
        <TextInput
          style={{
            height: 40,
            //backgroundColor: "aliceblue",
            borderColor: "gray",
            borderWidth: 1,
            padding: 10,
            margin: 20
          }}
          autoFocus={true}
          keyboardType="email-address"
          placeholder="Enter your email"
          placeholderTextColor="red"
          onChangeText={text => {
            this.setState(() => {
              return { typedText1: text };
            });
          }}
        />

        <TextInput
          style={{
            backgroundColor: "aliceblue",
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            padding: 10,
            marginLeft: 20,
            marginRight: 20
          }}
          keyboardType="default"
          placeholder="Enter your password"
          placeholderTextColor="red"
          secureTextEntry={true}
          onChangeText={text => {
            this.setState(() => {
              return { typedPassword: text };
            });
          }}
        />

        <TextInput
          style={{
            height: 100,
            backgroundColor: "aliceblue",
            margin: 10,
            padding: 10,
            borderColor: "gray",
            borderWidth: 1,
            marginLeft: 20,
            marginRight: 20
          }}
          multiline={true}
          edittable={true}
          returnKeyType="done"
          onSubmitEditing={Keyboard.dismiss}
          onChangeText={text => {
            this.setState(() => {
              return { typedDescription: text };
            });
          }}
        />

        <Button style={{
          padding: 15,
          width: 150,
          color: "white",
          backgroundColor: "green",
          borderRadius: 20,
          margin: 20
        }}
          onPress={this._onPressButton}
        
        >
          This is a button
        </Button>

        <Text style={{ marginLeft: 20 }}> {this.state.typedText1}</Text>
        <Text style={{ marginLeft: 20 }}> {this.state.typedPassword}</Text>
        <Text style={{ marginLeft: 20 }}> {this.state.typedDescription}</Text>


        {/* <View style={{width:200, justifyContent: 'center', alignItem:'center', borderRadius: 16, shadowRadius: 16, padding: 20}}>
          <Button
            onPress = {this._onPressButton}
            
            title="Login"
            color="green"
            
          ></Button>
        </View> */}


      </View>
    );
  }
}
