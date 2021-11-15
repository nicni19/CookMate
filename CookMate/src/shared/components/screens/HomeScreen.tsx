import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { Center } from "../style/Center";
import { User } from "../../view-models/User";

import QueryService from '../../services/QueryService';

interface HomeScreenProps {}

export const HomeScreen: React.FC<HomeScreenProps> = () => {

    const [user, setUser]: any = useState();

    useEffect(() => {
        (async function() {
            await QueryService.users.getUser("YgfIR4vZowc7UauYVw4q").then((item: any) => {
                setUser(item)
            })
        })();
    }, [])

    return (
        <Center>
            <Text>Home</Text>
            <Text>Username: {user && user.firstName}</Text>
        </Center>
    );
};
