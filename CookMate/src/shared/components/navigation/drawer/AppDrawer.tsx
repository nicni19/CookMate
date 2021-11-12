import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { HomeScreen } from "../../screens/HomeScreen";
import { CreateRecipeScreen } from "../../screens/CreateRecipeScreen";
import { AppParamList } from "../param-lists/AppParamList";
import { RecipeFeedScreen } from "../../screens/RecipeFeedScreen";

interface AppDrawerProps {}

const Drawer = createDrawerNavigator<AppParamList>();

export const AppDrawer: React.FC<AppDrawerProps> = () => {
    return (
        <Drawer.Navigator
            initialRouteName="RecipeFeedScreen"
            screenOptions={{
                headerTitle: "CookMate"
            }}
        >
            <Drawer.Screen name="RecipeFeedScreen" component={RecipeFeedScreen} />
            <Drawer.Screen
                name="CreateRecipeScreen"
                component={CreateRecipeScreen}
            />
        </Drawer.Navigator>
    );
};