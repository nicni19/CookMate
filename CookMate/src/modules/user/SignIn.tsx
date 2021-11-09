import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../../shared/components/auth/AuthProvider";
import { Center } from "../../shared/components/style/Center";

interface SignInProps {}

export const SignIn: React.FC<SignInProps> = () => {
    const { signIn } = useContext(AuthContext);
    return (
        <Center>
            <TouchableOpacity onPress={() => signIn()}>
                <Text>Sign In</Text>
            </TouchableOpacity>
        </Center>
    );
};
