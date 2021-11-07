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
            let { id, firstname, lastname, cookbookId } = data.find((item: any) => item.id == userId);
            if(id) {
                return new User(
                    id,
                    firstname,
                    lastname,
                    this.getFollowersOfCookbook(cookbookId)
                )
            }
            return null!;
        },
        getFollowersOfCookbook: function (cookbookId: string): CookbookSimple[] {
            const data = require('../../../assets/data/follower_relation.db.json');
            let cookbook = data
                                .filter((item: any) => item.cookbookId == cookbookId)
                                .map((item: any) => (
                                    new CookbookSimple(
                                        item['id'],
                                        item['name'],
                                        new UserSimple("","","")
                                    )
                                ));
            console.log(cookbook)
            if(cookbook) {
                return cookbook;
            }
            return [];
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
