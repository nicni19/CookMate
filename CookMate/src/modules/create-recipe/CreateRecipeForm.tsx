import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import CreateRecipeFive from "./CreateRecipeFive";
import CreateRecipeFour from "./CreateRecipeFour";
import CreateRecipeOne from "./CreateRecipeOne";
import CreateRecipeThree from "./CreateRecipeThree";
import CreateRecipeTwo from "./CreateRecipeTwo";
import { FormikCreateRecipeFormValues } from "./IFormikValues";

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
    // TODO: Change type of the Four and Five
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
    const [step, setStep] = useState<number>(0);

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

    const createRecipeForms: JSX.Element[] = [
        <CreateRecipeOne />,
        <CreateRecipeTwo />,
        <CreateRecipeThree formik={formik} />,
        <CreateRecipeFour formik={formik} />,
        <CreateRecipeFive formik={formik} />
    ];

    return <div>{createRecipeForms[step]}</div>;
}

export default CreateRecipeForm;
