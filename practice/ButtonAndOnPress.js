import React from "react";
import { Text, View, Button } from "react-native";

const OnPressButton = () => {
    let data = 100;
    const info = () => {
        let data = 30;
        //console.warn(val)
        console.warn(data);
    }

    return (
        <View>
            <Text style={{fontSize:30}}>{data}</Text>
            <Button title= "onPress" onPress={()=>info()}  color ={'green'}/>
            <Button title= "onPress2" onPress={info} color = {'red'}/>

        </View>
    );
}

export default OnPressButton;