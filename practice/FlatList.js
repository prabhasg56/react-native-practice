import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const FlatListPractice = () => {
    const user = [
        {
            id: 1,
            name: "Sam"
        },
        {
            id: 2,
            name: "Ram"
        },
        {
            id: 3,
            name: "Rohan"
        },
        {
            id: 4,
            name: "Suman"
        }
    ]

    return (
        <View >
            <Text style={{fontSize: 20, marginTop: 40}}> List With Flate list component:</Text>
            <FlatList 
                data = {user} // props
                renderItem = {({item})=> <Text style = {styles.item}> {item.name}</Text>}
                keyExtractor = {item=>item.id} //not use yet 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        fontSize: 24,
        padding: 10,
        color: "#fff",
        backgroundColor: "blue",
        borderColor: "black",
        borderWidth: 1,
        margin: 10,
        marginLeft: 20
    }
})

export default FlatListPractice;