import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const GridWithDynamicData = () => {
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
            name: "Su"
        }
    ]

    return (
        <View>
            <Text style={{ fontSize: 30, marginTop:30 }}> Grid with dynamic grid</Text>
            <View style = {{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                {
                    users.map((item) => <Text style={styles.item}>{item.name}</Text>)
                }
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    item: {
        fontSize: 24,
        padding: 10,
        color: "#fff",
        backgroundColor: "blue",
        margin: 6,
        padding: 5,
        width: 100,
        height: 100,
        textAlignVertical: "center",
        textAlign: "center"
    }
})

export default GridWithDynamicData;