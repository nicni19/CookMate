import React, { useState, useEffect, useContext } from "react";
import {
    createStackNavigator,
    StackNavigationProp
} from "@react-navigation/stack";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "./auth/AuthProvider";
import { Center } from "./style/Center";
import { AuthStack } from "./navigation/stacks/AuthStack";
import { AppTabs } from "./navigation/tabs/AppTabs";

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
    const { user, login } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // check if the user is logged in or not
        AsyncStorage.getItem("user")
            .then((userString) => {
                if (userString) {
                    // decode it
                    login();
                }
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    if (loading) {
        return (
            <Center>
                <ActivityIndicator size="large" />
            </Center>
        );
    }

    return (
        <NavigationContainer>
            {user ? <AppTabs /> : <AuthStack />}
        </NavigationContainer>
    );
};
