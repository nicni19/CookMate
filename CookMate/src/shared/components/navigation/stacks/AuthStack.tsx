import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { SignInScreen } from "../../screens/SignInScreen";
import { SignUpScreen } from "../../screens/SignUpScreen";
import { AuthParamList } from "../param-lists/AuthParamList";

interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamList>();

export const AuthStack: React.FC<AuthStackProps> = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                header: () => null
            }}
            initialRouteName="SignInScreen"
        >
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        </Stack.Navigator>
    );
};
