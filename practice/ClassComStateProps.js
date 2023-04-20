import React, { Component } from "react";
import { Text, TextInput, View } from "react-native";
import Student from "./Student";

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "Aman",
    };
  }

  updateName(text) {
    this.setState({ name: text });
  }

  render() {
    return (
      <View style={{marginLeft:10}}>
        <Text style={{ fontSize: 22, marginTop: 30, color:'blue' }}>
          {" "}
          Class Component with state and props ! Update state {this.state.name}
        </Text>
        <TextInput
          placeholder="Enter Your name"
          onChangeText={(text) => this.updateName(text)}
        />
        <Student name={this.state.name}/>
      </View>
    );
  }
}

export default ClassComponent;
