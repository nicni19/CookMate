import React from "react";
import {createStackNavigator, StackNavigationProp} from "@react-navigation/stack";
import {FeedParamList} from "../param-lists/FeedParamList";
import {RecipeFeedScreen} from "../../screens/RecipeFeedScreen";
import {UserScreen} from "../../screens/UserScreen";
import {RouteProp} from "@react-navigation/native";
import {AuthParamList} from "../param-lists/AuthParamList";
import {RecipeViewScreen} from "../../screens/RecipeViewScreen";

interface FeedStackProps {}

const Stack = createStackNavigator<FeedParamList>();

export const FeedStack: React.FC<FeedStackProps> = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                header: () => null
            }}
            initialRouteName="RecipeFeedScreen"
        >
            <Stack.Screen name="RecipeFeedScreen" component={RecipeFeedScreen} />
            <Stack.Screen name="UserScreen" component={UserScreen} />
            <Stack.Screen name="RecipeViewScreen" component={RecipeViewScreen} />

        </Stack.Navigator>
    );
};