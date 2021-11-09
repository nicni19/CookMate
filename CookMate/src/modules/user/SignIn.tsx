import React from "react";
import { Text } from "react-native";
import { Center } from "../../shared/components/style/Center";

interface SignInProps {}

export const SignIn: React.FC<SignInProps> = () => {
    return (
        <Center>
            <Text>Sign In</Text>
        </Center>
    );
};
