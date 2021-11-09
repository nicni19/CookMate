import { FormikProps } from "formik";

export interface FormikCreateRecipeFormValues {
    createRecipeImagePick: string | null;
    createRecipeInformation: {
        recipeName: string;
        recipeDescription: string;
        recipeTime: string;
        recipePeople: string;
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
    ingredient: string;
    quantity: string;
    unit: string;
}

export interface RecipeInstruction {
    instruction: string;
}