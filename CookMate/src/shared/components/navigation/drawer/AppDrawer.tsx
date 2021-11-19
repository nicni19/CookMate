import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { AppParamList } from "../param-lists/AppParamList";
import { CreateRecipeStack } from "../stacks/CreateRecipeStack";
import { theme } from "../../../theme";
import { SignOutScreen } from "../../screens/SignOutScreen";
import {FeedStack} from "../stacks/FeedStack";
import { MyScreen } from "../../screens/MyScreen";

interface AppDrawerProps {}

const Drawer = createDrawerNavigator<AppParamList>();

export const AppDrawer: React.FC<AppDrawerProps> = () => {
    return (
        <Drawer.Navigator
            initialRouteName="FeedStack"
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
                name="FeedStack"
                component={FeedStack}
                options={{
                    title: "Feed"
                }}
            />
            <Drawer.Screen 
                name="MyScreen"
                component={MyScreen}
                options={{
                    title: "My Profile"
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
        </Drawer.Navigator>
    );
};
