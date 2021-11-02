import { FormikProps } from "formik";

export interface FormikCreateRecipeFormValues {
    createRecipeOne: {
        image: HTMLImageElement | null;
    },
    createRecipeTwo: {
        image: HTMLImageElement | null;
    },
    createRecipeThree: {
        recipeName: string;
        recipeDescription: string;
        recipeTime: string;
        recipePeople: string;
    },
    createRecipeFour: {
        recipeIngredients: RecipeIngredient[];
    },
    createRecipeFive: {
        recipeInstructions: RecipeInstruction[];
    }
};

export interface FormCreateRecipeProps {
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
