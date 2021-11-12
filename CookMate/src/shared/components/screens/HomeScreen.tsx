import React from "react";
import { Text } from "react-native";
import { Center } from "../style/Center";

interface HomeScreenProps {}

export const HomeScreen: React.FC<HomeScreenProps> = () => {
    return (
        <Center>
            <Text>Home</Text>
        </Center>
    );
};
