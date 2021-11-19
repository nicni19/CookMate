import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { HomeScreen } from "../../screens/HomeScreen";
import { AppParamList } from "../param-lists/AppParamList";
import { CreateRecipeStack } from "../stacks/CreateRecipeStack";
import { theme } from "../../../theme";
import { SignOutScreen } from "../../screens/SignOutScreen";
import {RecipeFeedScreen} from "../../screens/RecipeFeedScreen";
import { RecipeViewScreen } from "../../screens/RecipeViewScreen";

interface AppDrawerProps {}

const Drawer = createDrawerNavigator<AppParamList>();

export const AppDrawer: React.FC<AppDrawerProps> = () => {
    return (
        <Drawer.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerTitle: "CookMate",
                headerStyle: {
                    backgroundColor: theme.palette.primaryColor
                },
                headerTitleStyle: {
                    fontWeight: "300",
                    fontSize: 25
                }
            }}
        >
            <Drawer.Screen
                name="RecipeFeedScreen"
                component={RecipeFeedScreen}
                options={{
                    title: "Feed"
                }}
            />
            <Drawer.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: "Home"
                }}
            />
            <Drawer.Screen
                name="CreateRecipeStack"
                component={CreateRecipeStack}
                options={{
                    title: "Create Recipe"
                }}
            />
            <Drawer.Screen
                name="SignOutScreen"
                component={SignOutScreen}
                options={{
                    title: "Sign Out"
                }}
            />
            <Drawer.Screen
                name="RecipeViewScreen"
                component={RecipeViewScreen}
                options={{
                    title: "Recipe View"
                }}
            />
        </Drawer.Navigator>
    );
};
