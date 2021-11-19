import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";

export type AppParamList = {
    HomeScreen: undefined;
    CreateRecipeStack: undefined;
    SignOutScreen: undefined;
    FeedStack: undefined;
    RecipeFeedScreen: undefined;
    RecipeViewScreen: undefined;
};

export type AppNavProps<T extends keyof AppParamList> =
    NativeStackNavigationProp<AppParamList, T>;
