import {CookbookSimple} from "./CookbookSimple";
import {UserSimple} from "./UserSimple";
import {RecipeSimple} from "./RecipeSimple";

export class Cookbook extends CookbookSimple {

    get followers(): UserSimple[] {
        // this._followers =    // TODO: Get followers from model as these only need to be loaded when explicitly asked for
        return this._followers;
    }
    private _followers : UserSimple[];

    recipes : RecipeSimple[];


    constructor(id: string, name: string, owner: UserSimple, followers: UserSimple[], recipes: RecipeSimple[]) {
        super(id, name, owner);
        this._followers = followers;
        this.recipes = recipes;
    }
}
