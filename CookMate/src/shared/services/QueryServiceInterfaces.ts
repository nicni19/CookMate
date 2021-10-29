import {User} from "../view-models/User";
import {UserSimple} from "../view-models/UserSimple";
import {Cookbook} from "../view-models/Cookbook";
import {Recipe} from "../view-models/Recipe";
import {RecipeSimple} from "../view-models/RecipeSimple";

export interface IUserQueryService {
    /**
     * Retrieves a user matching the userId
     * @param userId
     */
    getUser(userId: string) : User;

    /**
     * Retrieves the users following the cookbook which matches the cookbookId
     * @param cookbookId
     */
    getFollowersOfCookbook(cookbookId: string) : UserSimple[];
}

export interface ICookbookQueryService {
    /**
     * Retrieves a cookbook matching the cookbookId
     * @param cookbookId
     */
    getCookbook(cookbookId : string) : Cookbook;

    /**
     * Retrieves the cookbook belonging to the user matching the userId
     * @param userId
     */
    getUserCookbook(userId : string) : Cookbook;
}

export interface IRecipeQueryService {
    /**
     * Retrieves a recipe matching the recipeId
     * @param recipeId
     */
    getRecipe(recipeId : string) : Recipe;

    /**
     * Retrieves all the recipes from the cookbook matching the cookbookId
     * @param cookbookId
     */
    getRecipes(cookbookId : string) : RecipeSimple[];

    /**
     * Adds the recipe to the cookbook matching the cookbookId
     * @param cookbookId
     * @param recipe
     */
    addRecipe(cookbookId : string, recipe : Recipe) : void;
}
