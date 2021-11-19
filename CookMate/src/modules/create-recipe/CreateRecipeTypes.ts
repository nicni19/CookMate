import { FormikProps } from "formik";
import { Unit } from "../../shared/view-models/Unit";

export interface FormikCreateRecipeFormValues {
    createRecipeImagePick: string | null;
    createRecipeInformation: {
        recipeName: string;
        recipeDescription: string;
        recipeTime: number;
        recipePeople: number;
    };
    createRecipeIngredient: {
        recipeIngredients: RecipeIngredient[];
    };
    createRecipeInstruction: {
        recipeInstructions: RecipeInstruction[];
    };
}

export interface CreateRecipeFormProps {
    formik: FormikProps<FormikCreateRecipeFormValues>;
}

export interface RecipeIngredient {
    id: number;
    ingredient: string;
    quantity: number;
    unit: Unit;
}

export interface RecipeInstruction {
    sortingNumber: number;
    text: string;
}
