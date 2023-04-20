import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const GetTextInputVal = () => {
    const [name, setName] = useState("");

    return (
        <View>
            <Text style = {{fontSize: 20, marginTop: 30}}> Handle Text Input: </Text>
            <Text style = {{fontSize: 18, padding: 5, marginTop: 8}}> Your Name is: {name}</Text>
            <TextInput 
                style = {styles.textInput}
                placeholder="Enter your name"
                value={name}
                onChangeText={(text)=>setName(text)}
            />
            <Button title="Clear Input value" onPress={()=>setName("")} />
        </View>
    )
}

const styles = StyleSheet.create({
   textInput: {
    fontSize: 20,
   // color: "Blue",
    borderColor: "blue",
    borderWidth: 2,
    margin: 10,
    padding: 10,
    borderRadius: 5
   }
})

export default GetTextInputVal;