import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateRecipeScreen from "./src/shared/components/screens/CreateRecipeScreen";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <CreateRecipeScreen />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
});
