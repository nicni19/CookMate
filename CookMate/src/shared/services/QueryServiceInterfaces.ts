import {User} from "../view-models/User";
import {UserSimple} from "../view-models/UserSimple";
import {Cookbook} from "../view-models/Cookbook";
import {Recipe} from "../view-models/Recipe";
import {RecipeSimple} from "../view-models/RecipeSimple";
import { CookbookSimple } from "../view-models/CookbookSimple";

export interface IUserQueryService {
    /**
     * Retrieves a user matching the userId
     * @param userId
     */
    getUser(userId: string) : Promise<User>;

    /**
     * Retrieves a user matching the userId
     * @param userId
     */
    getUserSimple(userId: string) : Promise<UserSimple>;

    /**
     * Retrieves the users following the cookbook which matches the cookbookId
     * @param cookbookId
     */
    getFollowersOfCookbook(cookbookId: string) : Promise<UserSimple[]>;
}

export interface ICookbookQueryService {
    /**
     * Retrieves a cookbook matching the cookbookId
     * @param cookbookId
     */
    getCookbook(cookbookId : string) : Promise<Cookbook>;

    /**
     * Retrieves the cookbook belonging to the user matching the userId
     * @param userId
     */
    getUserCookbook(userId : string) : Promise<Cookbook>;

    getFollowedCookbooks(userIds: string[]) : Promise<CookbookSimple[]>;
}

export interface IRecipeQueryService {
    /**
     * Retrieves a recipe matching the recipeId
     * @param recipeId
     */
    getRecipe(recipeId : string) : Promise<Recipe>;

    /**
     * Retrieves all the recipes from the cookbook matching the cookbookId
     * @param cookbookId
     */
    getRecipes(cookbookId : string) : Promise<RecipeSimple[]>;

    /**
     * Adds the recipe to the cookbook matching the cookbookId
     * @param cookbookId
     * @param recipe
     */
    addRecipe(cookbookId : string, recipe : Recipe) : void;
}

export interface ILoginService {
    /**
     * Requests login and return boolean
     * @param username
     * @param password
     */
    requestLogin(username : string, password : string) : Promise<boolean>;
}