import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import CreateRecipeFive from "./CreateRecipeFive";
import CreateRecipeFour from "./CreateRecipeFour";
import CreateRecipeOne from "./CreateRecipeOne";
import CreateRecipeThree from "./CreateRecipeThree";
import CreateRecipeTwo from "./CreateRecipeTwo";
import FormikCreateRecipeFormValues from "./IFormikValues";

const initialValues: FormikCreateRecipeFormValues = {
    createRecipeOne: {
        image: null
    },
    createRecipeTwo: {
        image: null
    },
    createRecipeThree: {
        recipeName: "",
        recipeDescription: "",
        recipeTime: "",
        recipePeople: ""
    },
    createRecipeFour: {
        recipeIngredients: {
            ingredient: "",
            quantity: "",
            unit: ""
        }
    },
    createRecipeFive: {
        recipeInstructions: []
    }
};

function CreateRecipeForm() {
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object({
            createRecipeThree: Yup.object({
                recipeName: Yup.string().required(),
                recipeDescription: Yup.string().required(),
                recipeTime: Yup.number().required(),
                recipePeople: Yup.number().required()
            }),
            createRecipeFour: Yup.object({
                recipeIngredients: Yup.array()
            }),
            createRecipeFive: Yup.object({
                recipeInstructions: Yup.array()
            })
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <div>
            <CreateRecipeOne />
            <CreateRecipeTwo />
            <CreateRecipeThree />
            <CreateRecipeFour formik={formik} />
            <CreateRecipeFive />
        </div>
    );
}

export default CreateRecipeForm;
