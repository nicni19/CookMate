import React,{useEffect,useState} from "react";
import RecipeView from "../../../modules/RecipeView/RecipeView";
import QueryService from "../../services/QueryService";
import { Ingredient } from "../../view-models/Ingredient";
import { Instruction } from "../../view-models/Instruction";
import { Recipe } from "../../view-models/Recipe";
import { RecipeSimple } from "../../view-models/RecipeSimple";
import { Unit } from "../../view-models/Unit";

export const RecipeViewScreen = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [xrecipe, setXrecipe]: any = useState();
    
    useEffect(()=>{
        (async function() {
            QueryService.recipes.getRecipe("wxmsziFsImfCHyjQJgkG").then((dbRecipe:any)=>{
                setXrecipe(dbRecipe);
            }).then(() => {
                setIsLoading(false);
            });
        })();

    },[]);

    if(!isLoading) {
        return <RecipeView recipe={xrecipe}/>
    }
    return null;
};
