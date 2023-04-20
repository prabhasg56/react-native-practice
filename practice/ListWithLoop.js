import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

const FlatListWithLoop = () => {
  const user = [
    {
      id: 1,
      name: "Sam",
      email: "prabhas@gmail.com",
    },
    {
      id: 2,
      name: "Ram",
      email: "prabhas@gmail.com",
    },
    {
      id: 3,
      name: "Rohan",
      email: "prabhas@gmail.com",
    },
    {
      id: 4,
      name: "Suman",
      email: "prabhas@gmail.com",
    },
  ];

  return (
    <View>
      <Text style={{ fontSize: 25, marginTop: 20 }}>
        {" "}
        Component in loop with Flatlist
      </Text>

      {/* passing custom component */}

      <FlatList
        data={user}
        renderItem={({ item }) => <UserData item={item} />}
      />
    </View>
  );
};

const UserData = (props) => {
  const item = props.item;
  return (
    <View style={styles.box}>
      <Text style={styles.item}> {item.name} </Text>
      <Text style={styles.item}> {item.email} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 20,
    color: "orange",
    flex: 1,
    margin: 2,
    textAlign: "center",
  },
  box: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 5,
    margin: 10,
  },
});

export default FlatListWithLoop;
