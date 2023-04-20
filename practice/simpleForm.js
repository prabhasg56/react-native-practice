import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

const SimpleForm = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [display, setDisplay] = useState(false);

    const resetFormData = () => {
        setDisplay(false);
        setName("");
        setPassword("");
        setEmail("");
    }

    return (
        <View >
            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 30 }}>Simple form in React Native</Text>
            <TextInput
                style={styles.form}
                placeholder="Enter Your Name"
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <TextInput
                style={styles.form}
                placeholder="Enter Password"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            <TextInput
                style={styles.form}
                placeholder="Enter Your Email"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <Button title="Print Form Details" color={"green"} onPress={() => setDisplay(true)} />
            <Button title="Clear Details" color={"red"} onPress={resetFormData} />
            <View>
                {
                    display ?
                        <View>
                            <Text style={{ fontSize: 15 }}>User Name: {name}</Text>
                            <Text style={{ fontSize: 15 }}>User Password: {password}</Text>
                            <Text style={{ fontSize: 15 }}>User Email: {email}</Text>
                        </View>
                        : null
                }
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    form: {
        borderWidth: 3,
        borderRadius: 3,
        borderColor: 'blue',
        fontSize: 20,
        marginTop: 5,
        margin: 5,
        fontWeight: 'bold'
    }
})

export default SimpleForm;