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
            let { id, firstname, lastname, cookbookId } = data.find((item: any) => item.id == userId) || {}
            return id && new User(
                id,
                firstname,
                lastname,
                this.getFollowersOfCookbook(cookbookId)
            ) || null!
        },
        getUserSimple: function (userId: string): UserSimple {
            const data = require('../../../assets/data/user.db.json');
            let { id, firstname, lastname, profilepicture } = data.find((item: any) => item.id == userId) || {}

            return id && new UserSimple(
                id,
                firstname,
                lastname
            ) || null
        },
        getFollowersOfCookbook: function (cookbookId: string): CookbookSimple[] {
            const data = require('../../../assets/data/follower_relation.db.json');
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
