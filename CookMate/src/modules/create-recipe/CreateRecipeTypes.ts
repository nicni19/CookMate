import { FormikProps } from "formik";

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
    unit: string;
}

export interface RecipeInstruction {
    sortingNumber: number;
    text: string;
}
