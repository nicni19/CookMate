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
        recipeIngredients: {
            ingredient: string;
            quantity: string;
            unit: string;
        }
    },
    createRecipeFive: {
        recipeInstructions: string[]
    }
};

export interface FormCreateRecipeProps {
    formik: FormikProps<FormikCreateRecipeFormValues>;
}
