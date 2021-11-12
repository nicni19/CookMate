import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { HomeScreen } from "../../screens/HomeScreen";
import { CreateRecipeScreen } from "../../screens/CreateRecipeScreen";
import { AppParamList } from "../param-lists/AppParamList";

interface AppDrawerProps {}

const Drawer = createDrawerNavigator<AppParamList>();

export const AppDrawer: React.FC<AppDrawerProps> = () => {
    return (
        <Drawer.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerTitle: "CookMate"
            }}
        >
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            <Drawer.Screen
                name="CreateRecipeScreen"
                component={CreateRecipeScreen}
            />
        </Drawer.Navigator>
    );
};
