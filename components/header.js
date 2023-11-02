import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>СПИСОК ДЕЛ</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        height: 70,
        backgroundColor: "#F59A7A",

    },
    text: {
        textAlign: "center",
        padding: 10,
        color: "white",
        fontWeight: "bold",
        paddingTop: 30,
    },
});