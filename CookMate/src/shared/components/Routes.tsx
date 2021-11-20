import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "./auth/AuthProvider";
import { Center } from "./style/Center";
import { AuthStack } from "./navigation/stacks/AuthStack";
import { AppDrawer } from "./navigation/drawer/AppDrawer";
import { UserSession } from "./auth/AuthType";

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
    const { user, signIn } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AsyncStorage.getItem("user_session")
            .then((userString) => {
                if (userString) {
                    const user = JSON.parse(userString) as UserSession;
                    signIn(user?.id);
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
