import {StackNavigationProp} from "@react-navigation/stack";
import {RouteProp} from "@react-navigation/native";
import {UserScreenParams} from "../../screens/UserScreen";

export type FeedParamList = {
    RecipeFeedScreen: undefined;
    UserScreen: UserScreenParams;
    RecipeViewScreen: undefined;
};

export type FeedNavProps<T extends keyof FeedParamList> = {
    navigation: StackNavigationProp<FeedParamList, T>;
    route: RouteProp<FeedParamList, T>;
};