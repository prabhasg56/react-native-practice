import React, { Component } from "react";
import { Text, TextInput, View } from "react-native";

class Student extends Component {

    render(){
        return(
            <View>
                <Text style={{color: 'green', fontSize: 25}}>Student component : {this.props.name} </Text>
            </View>
        )
    }
}

export default Student 