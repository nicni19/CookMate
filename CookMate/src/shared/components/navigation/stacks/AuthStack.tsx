import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { SignIn } from "../../../../modules/user/SignIn";
import { SignUp } from "../../../../modules/user/SignUp";
import { AuthParamList } from "../param-lists/AuthParamList";

interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamList>();

export const AuthStack: React.FC<AuthStackProps> = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                header: () => null
            }}
            initialRouteName="SignIn"
        >
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
};
