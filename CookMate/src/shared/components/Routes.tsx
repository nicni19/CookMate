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
import { AppDrawer } from "./navigation/drawer/AppDrawer";

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
    const { user, signIn } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AsyncStorage.getItem("user")
            .then((userString) => {
                if (userString) {
                    // decode it
                    signIn();
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
            {user ? <AppDrawer /> : <AuthStack />}
        </NavigationContainer>
    );
};
