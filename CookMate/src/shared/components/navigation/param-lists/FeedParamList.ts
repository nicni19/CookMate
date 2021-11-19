import {StackNavigationProp} from "@react-navigation/stack";
import {RouteProp} from "@react-navigation/native";
import {UserScreenParams} from "../../screens/UserScreen";
import {RecipeViewScreenParams} from "../../screens/RecipeViewScreen";

export type FeedParamList = {
    RecipeFeedScreen: undefined;
    UserScreen: UserScreenParams;
    RecipeViewScreen: RecipeViewScreenParams;
};

export type FeedNavProps<T extends keyof FeedParamList> = {
    navigation: StackNavigationProp<FeedParamList, T>;
    route: RouteProp<FeedParamList, T>;
};