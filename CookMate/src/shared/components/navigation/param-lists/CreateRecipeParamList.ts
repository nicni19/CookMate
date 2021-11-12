import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type CreateRecipeParamList = {
    CreateRecipeScreen: undefined;
}


export type CreateRecipeNavProps<T extends keyof CreateRecipeParamList> = {
    navigation: StackNavigationProp<CreateRecipeParamList, T>;
    route: RouteProp<CreateRecipeParamList, T>;
};