import {CookbookSimple} from "./CookbookSimple";
import {UserSimple} from "./UserSimple";
import {RecipeSimple} from "./RecipeSimple";

export class Cookbook extends CookbookSimple {
    followers : UserSimple[];
    recipes : RecipeSimple[];


    constructor(id: string, name: string, owner: UserSimple, followers: UserSimple[], recipes: RecipeSimple[]) {
        super(id, name, owner);
        this.followers = followers;
        this.recipes = recipes;
    }
}