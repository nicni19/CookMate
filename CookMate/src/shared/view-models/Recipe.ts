import {RecipeSimple} from "./RecipeSimple";
import {Instruction} from "./Instruction";
import {Ingredient} from "./Ingredient";

export class Recipe extends RecipeSimple {
    description : string;
    instructions : Instruction[];
    ingredients : Ingredient[];

    constructor(recipe: RecipeSimple, description: string, instructions: Instruction[], ingredients: Ingredient[]) {
        super(recipe.id, recipe.cookbookId, recipe.name, recipe.estimatedCookingTime, recipe.servings, recipe.imageURL);

        this.description = description;
        this.instructions = instructions;
        this.ingredients = ingredients;
    }
}