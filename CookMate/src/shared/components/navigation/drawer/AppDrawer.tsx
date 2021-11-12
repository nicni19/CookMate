import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { HomeScreen } from "../../screens/HomeScreen";
import { CreateRecipeScreen } from "../../screens/CreateRecipeScreen";
import { AppParamList } from "../param-lists/AppParamList";
import { CreateRecipeStack } from "../stacks/CreateRecipeStack";
import { theme } from "../../../theme";

interface AppDrawerProps {}

const Drawer = createDrawerNavigator<AppParamList>();

export const AppDrawer: React.FC<AppDrawerProps> = () => {
    return (
        <Drawer.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerTitle: "CookMate",
                headerStyle: {
                    backgroundColor: theme.primaryColor
                },
                headerTitleStyle: {
                    fontWeight: "300",
                    fontSize: 25
                }
            }}
        >
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            <Drawer.Screen
                name="CreateRecipeStack"
                component={CreateRecipeStack}
            />
        </Drawer.Navigator>
    );
};
