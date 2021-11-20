import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AppParamList = {
    CreateRecipeStack: undefined;
    MyScreen: undefined;
    SignOutScreen: undefined;
    FeedStack: undefined;
    RecipeFeedScreen: undefined;
};

export type AppNavProps<T extends keyof AppParamList> =
    NativeStackNavigationProp<AppParamList, T>;
