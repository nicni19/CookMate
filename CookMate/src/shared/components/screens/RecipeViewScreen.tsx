import React,{useEffect,useState} from "react";
import RecipeView from "../../../modules/RecipeView/RecipeView";
import QueryService from "../../services/QueryService";

export const RecipeViewScreen = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [xrecipe, setXrecipe]: any = useState();
    
    useEffect(()=>{
        (async function() {
            QueryService.recipes.getRecipe("izcml7D0Z3LMk2rMpayf").then((dbRecipe:any)=>{
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
