import React,{useEffect,useState} from "react";
import RecipeView from "../../../modules/RecipeView/RecipeView";
import QueryService from "../../services/QueryService";
import { Ingredient } from "../../view-models/Ingredient";
import { Instruction } from "../../view-models/Instruction";
import { Recipe } from "../../view-models/Recipe";
import { RecipeSimple } from "../../view-models/RecipeSimple";
import { Unit } from "../../view-models/Unit";
import {FeedNavProps} from "../navigation/param-lists/FeedParamList";

export type RecipeViewScreenParams = {
    recipeId : string
}
type RecipeViewScreenProps = {} & FeedNavProps<"RecipeViewScreen">

export const RecipeViewScreen : React.FC<RecipeViewScreenProps> = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [xrecipe, setXrecipe]: any = useState();
    
    useEffect(()=>{
        (async function() {
            QueryService.recipes.getRecipe(props.route.params.recipeId).then((dbRecipe:any)=>{
                setXrecipe(dbRecipe);
            }).then(() => {
                setIsLoading(false);
            });
        })();

    },[]);

    if(!isLoading) {
        return <RecipeView recipe={xrecipe} {...props}/>
    }
    return null;
};
