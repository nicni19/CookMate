import React, { useContext, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { AuthContext } from "../auth/AuthProvider";
import { Center } from "../style/Center";

interface SignOutScreenProps {}

export const SignOutScreen: React.FC<SignOutScreenProps> = () => {
    const { signOut } = useContext(AuthContext);
    
    useEffect(() => {
        signOut();
    }, []);

    return (
        <Center>
            <ActivityIndicator size="large" />
        </Center>
    );
};
