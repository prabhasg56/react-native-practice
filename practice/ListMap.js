import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const ListMap = () => {
    const users = [
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
        },
        {
            id: 4,
            name: "Shyam"
        },
        {
            id: 5,
            name: "Aman"
        },
        {
            id: 6,
            name: "Rohan"
        },
        {
            id: 7,
            name: "Rajan"
        },
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
        },
        {
            id: 4,
            name: "Shyam"
        },
        {
            id: 5,
            name: "Aman"
        },
        {
            id: 6,
            name: "Rohan"
        },
        {
            id: 7,
            name: "Rajan"
        }
    ]

    return (
        <View>
            <Text style={{fontSize: 30, marginTop:20}}> List With Map component</Text>
            <ScrollView style={{marginBottom:50}}>
                {
                    users.map((item)=> <Text style={styles.item}> {item.name} </Text>)
                }
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    item: {
        fontSize: 24,
        padding: 10,
        color: "#fff",
        backgroundColor: "blue",
        borderColor: "black",
        borderWidth: 1,
        margin: 10,
    }
})

export default ListMap;