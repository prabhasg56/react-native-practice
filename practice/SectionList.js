import React from "react";

import { View, Text, StyleSheet, SectionList } from "react-native";

const SectionListPractice = () => {
 
    const users =[
        {
            id : 1,
            name: "Ram",
            data: ["c", "c++","HTML"]
        },
        {
            id : 2,
            name: "Mukesh",
            data: ["css", "c++","HTML5"]
        },
        {
            id : 3,
            name: "Raman",
            data: ["c", "c++","HTML"]
        },
        {
            id : 4,
            name: "Tony",
            data: ["c", "c++","HTML"]
        }
    ]
    return (
        <View>
            <Text style={{fontSize: 25, marginTop: 20, marginLeft: 10}}>Section list is use to display nested array</Text>
            <SectionList
                sections={users}
                renderItem={({item}) => <Text style={{fontSize: 20, marginLeft: 20}}>{item}</Text>}
                renderSectionHeader={({section:{name}}) => (
                    <Text style={{fontSize: 25, color: "red"}}>{name}</Text>
                )}

            />
        </View>

    )
}

export default SectionListPractice;