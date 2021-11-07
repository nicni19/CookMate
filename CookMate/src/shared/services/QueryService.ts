import {ICookbookQueryService, IRecipeQueryService, IUserQueryService} from "./QueryServiceInterfaces";
import { User } from "../view-models/User";
import { UserSimple } from "../view-models/UserSimple";
import { Cookbook } from "../view-models/Cookbook";
import { Recipe } from "../view-models/Recipe";
import { RecipeSimple } from "../view-models/RecipeSimple";
import { CookbookSimple } from "../view-models/CookbookSimple";

export default class QueryService {

    public static users : IUserQueryService = {
        getUser: function (userId: string): User {
            const data = require('../../../assets/data/user.db.json');

            // Deconstructing data from user.db.json into variables
            // If data.find(...) returns null or fails, an empty object is returned and the variables are set to null
            let { id, firstname, lastname, cookbookId } = data.find((item: any) => item.id == userId) || {}
            
            // If "id" is not null, return a new User
            // Else return null
            return id && new User(
                id,
                firstname,
                lastname,
                this.getFollowersOfCookbook(cookbookId)
            ) || null!
        },
        getUserSimple: function (userId: string): UserSimple {
            const data = require('../../../assets/data/user.db.json');

            // Deconstructing data from user.db.json into variables
            // If data.find(...) returns null or fails, an empty object is returned and the variables are set to null
            let { id, firstname, lastname, profilepicture } = data.find((item: any) => item.id == userId) || {}

            // If "id" is not null, return a new UserSimple
            // Else return null
            return id && new UserSimple(
                id,
                firstname,
                lastname
            ) || null
        },
        getFollowersOfCookbook: function (cookbookId: string): CookbookSimple[] {
            const data = require('../../../assets/data/follower_relation.db.json');

            // Filter data to get only the items we need
            // Map the data from an object to an array of new CookbookSimple
            // If data.filter(...).map(...) returns null or fails, null is returned
            // "?." means that, if .filter(...) fails or returns null, .map doesn't run and saves memory and processing time, and falls back to "|| null"
            return data.filter((item: any) => item.cookbookId == cookbookId)
                       ?.map((item: any) => (
                           new CookbookSimple(
                               item['id'],
                               item['name'],
                               this.getUserSimple(item['owner'])
                           )
                       )) || null!;
        }
    };

    public static cookbooks : ICookbookQueryService = {
        getCookbook: function (cookbookId: string): Cookbook {
            throw new Error("Function not implemented.");
        },
        getUserCookbook: function (userId: string): Cookbook {
            throw new Error("Function not implemented.");
        }
    };

    public static recipes : IRecipeQueryService = {
        getRecipe: function (recipeId: string): Recipe {
            throw new Error("Function not implemented.");
        },
        getRecipes: function (cookbookId: string): RecipeSimple[] {
            throw new Error("Function not implemented.");
        },
        addRecipe: function (cookbookId: string, recipe: Recipe): void {
            throw new Error("Function not implemented.");
        }
    };
}
