import React from "react";
import { View, Text, StyleSheet } from "react-native";

Style = () => {
    return (
        <View>
            <Text style = {styles.textBox} > Style in react native </Text>
            <Text style = {styles.textBox} > Style in react native </Text>
            <Text style = {styles.textBox} > Style in react native </Text>
            <Text style = {styles.textBox} > Style in react native </Text>

        </View>
    )
}

const styles = StyleSheet.create ({
    textBox : {
        color: "black",
        fontSize: 20,
        backgroundColor: "blue",
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        height: 100,
        textAlignVertical: 'center',
        textAlign: 'center',
        borderColor: 'red',
        borderWidth: 2

    }
})

export default Style;