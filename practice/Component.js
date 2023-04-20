import React from "react";
import { Button, Text, View } from "react-native";

const Components = () => {
    return (
        <View style = {{marginTop: 30}}>
            <Text style = {{fontSize: 30, backgroundColor: 'yellow', padding: 5, textAlign: "center"}}> Components </Text>
            <UserData/>
        </View>
    )
}

const UserData = () => {
    return (
        <View>
        <Text style = {{fontSize: 20}}> Name : Anil  </Text>
        <Text style = {{fontSize: 20}}> Age : 25  </Text>
        <Text style = {{fontSize: 20}}> Email : anil@gmail.com  </Text>
        </View>

    )
}

export default Components;