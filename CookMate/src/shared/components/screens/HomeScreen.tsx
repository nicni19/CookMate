import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { Center } from "../style/Center";
import { User } from "../../view-models/User";

import QueryService from '../../services/QueryService';
import { Recipe } from "../../view-models/Recipe";
import { RecipeSimple } from "../../view-models/RecipeSimple";
import { Instruction } from "../../view-models/Instruction";
import { Ingredient } from "../../view-models/Ingredient";
import { Unit } from "../../view-models/Unit";

interface HomeScreenProps {}

export const HomeScreen: React.FC<HomeScreenProps> = () => {

    const [user, setUser]: any = useState();

    useEffect(() => {
        (async function() {
            await QueryService.users.getUser("YgfIR4vZowc7UauYVw4q").then((item: any) => {
                setUser(item)
            })
        })();

        (async function() {
            await QueryService.recipes.getRecipe("eIolgyJYebqM8gOFXxaZ").then((item: any) => {
                //console.log(item)
            })
        })();

        /*(async function() {
            let x = await QueryService.recipes.addRecipe("JEBGMGpCc2RWTczrwHUj", new Recipe(
                new RecipeSimple(
                    "test",
                    "test",
                    0,
                    0,
                    "_"
                ),
                "test",
                [
                    new Instruction(
                        "",
                        0,
                        "Test 1"
                    )
                ],
                [
                    new Ingredient(
                        "",
                        "And",
                        new Unit(
                            "stk",
                            "stk"
                        ),
                        1
                    )
                ]
            ))

            console.log(x)
        })();*/
    }, [])

    return (
        <Center>
            <Text>Home</Text>
            <Text>Username: {user && user.firstName}</Text>
        </Center>
    );
};