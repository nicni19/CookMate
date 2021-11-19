import React,{useEffect,useState} from "react";
import RecipeView from "../../../modules/RecipeView/RecipeView";
import QueryService from "../../services/QueryService";
import {FeedNavProps} from "../navigation/param-lists/FeedParamList";
import {ActivityIndicator} from "react-native";
import {theme} from "../../theme";
import {Center} from "../style/Center";
import {Recipe} from "../../view-models/Recipe";
import {UserSimple} from "../../view-models/UserSimple";
import {Cookbook} from "../../view-models/Cookbook";

export type RecipeViewScreenParams = {
    recipeId : string
}
type RecipeViewScreenProps = {} & FeedNavProps<"RecipeViewScreen">

export const RecipeViewScreen : React.FC<RecipeViewScreenProps> = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    const [recipe, setRecipe] = useState<Recipe>();
    const [owner, setOwner] = useState<UserSimple>();
    
    useEffect(() => {
        (async function() {
            await QueryService.recipes.getRecipe(props.route.params.recipeId).then((dbRecipe:Recipe)=>{
                setRecipe(dbRecipe);
                QueryService.cookbooks.getCookbook(dbRecipe.cookbookId as string).then((cookbook: Cookbook) => {
                    setOwner(cookbook.owner);
                }).then(() => {
                    setIsLoading(false);
                });
            });
        })();
    },[]);

    return isLoading ?
        <Center>
            <ActivityIndicator size="large" color={theme.palette.secondaryColor}/>
        </Center>
        :
        <RecipeView recipe={recipe} owner={owner} {...props}/>;
};
