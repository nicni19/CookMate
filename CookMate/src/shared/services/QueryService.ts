import { ICookbookQueryService, IRecipeQueryService, IUserQueryService } from "./QueryServiceInterfaces";
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

            let cookbookFollowers: CookbookSimple[] = [];
            this.getFollowersOfCookbook(cookbookId).forEach((user: any) => {
                cookbookFollowers.push(
                    QueryService.cookbooks.getUserCookbook(user.id)
                )
            });
            
            
            // If "id" is not null, return a new User
            // Else return null
            return id && new User(
                id,
                firstname,
                lastname,
                cookbookFollowers
                ) || null!
        },
        getUserSimple: function (userId: string): UserSimple {
            const data = require('../../../assets/data/user.db.json');
            
            // Deconstructing data from user.db.json into variables
            // If data.find(...) returns null or fails, an empty object is returned and the variables are set to null
            let { id, firstname, lastname, profilepicture } = data.find((item: any) => item.id == userId || item.id == "0") || {}

            // If "id" is not null, return a new UserSimple
            // Else return null
            return id && new UserSimple(
                id,
                firstname,
                lastname
            ) || null
        },
        getFollowersOfCookbook: function (cookbookId: string): UserSimple[] {
            const data = require('../../../assets/data/follower_relation.db.json');

            // Filter data to get only the items we need
            // Map the data from an object to an array of new CookbookSimple
            // If data.filter(...).map(...) returns null or fails, null is returned
            // "?." means that, if .filter(...) fails or returns null, .map doesn't run and saves memory and processing time, and falls back to "|| null"
            return data.filter((item: any) => item.cookbookId == cookbookId)
                       ?.map((item: any) => (
                           this.getUserSimple(item.userId)
                       )) || null!;
        }
    };

    public static cookbooks : ICookbookQueryService = {
        getCookbook: function (cookbookId: string): Cookbook {
            const data = require('../../../assets/data/cookbook.db.json');
            return data.filter((item: any) => item.id == cookbookId)
            ?.map((item: any) => {
                new Cookbook(
                    item.id,
                    item.name,
                    item.owner,
                    [QueryService.users.getUserSimple(item.id)],
                    [new RecipeSimple("","",0,0,"")]
                )
            })
        },
        getUserCookbook: function (userId: string): Cookbook {
            const data = require('../../../assets/data/cookbook.db.json');
            return data.find((item: any) => item.owner == userId)
        },
        getCookbookSimple: function (userId: string): CookbookSimple[] {
            const data = require('../../../assets/data/cookbook.db.json');
            return data.filter((item: any) => item.owner == userId)
            ?.map((item: any) => {
                new CookbookSimple(
                    item.id,
                    item.name,
                    item.owner
                )
            })
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