import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function Form({addHandler}) {
    const [text, setValue] = useState("");
    const onChange = (text) => {
        setValue(text);
    };
    return (
        <View style={styles.buttonContainer}>
            <TextInput 
                style={styles.input}
                placeholder="Впишите задачу..."
                onChangeText={onChange} 
            />   
            <Button
                color="#F4B7AC"
                onPress={() => addHandler(text)}
                title="Добавить задачу"
            /> 
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        padding: 20,
        paddingBottom: 16,
        marginTop: 20,
        marginBottom: 20,
    },
    buttonContainer: {
        width: "80%",
        marginLeft: "10%", 
        marginBottom: 20,
    },
});