import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, NativeSyntheticEvent, NativeTouchEvent } from "react-native";
import * as Yup from "yup";
import CreateRecipeFive from "./CreateRecipeFive";
import CreateRecipeFour from "./CreateRecipeFour";
import CreateRecipeOne from "./CreateRecipeOne";
import CreateRecipeThree from "./CreateRecipeThree";
import CreateRecipeTwo from "./CreateRecipeTwo";
import { FormikCreateRecipeFormValues } from "./CreateRecipeTypes";

const initialValues: FormikCreateRecipeFormValues = {
    createRecipeImage: null,
    createRecipeThree: {
        recipeName: "",
        recipeDescription: "",
        recipeTime: "",
        recipePeople: ""
    },
    createRecipeFour: {
        recipeIngredients: []
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
            console.log("test");
        }
    });

    const createRecipeForms: JSX.Element[] = [
        <CreateRecipeOne />,
        <CreateRecipeTwo />,
        <CreateRecipeThree formik={formik} />,
        <CreateRecipeFour formik={formik} />,
        <CreateRecipeFive formik={formik} />
    ];

    const firstStep = 0;
    const lastStep = createRecipeForms.length - 1;

    return (
        <div>
            {step == lastStep ? (
                <Button
                    title="Complete"
                    onPress={
                        formik.handleSubmit as unknown as (
                            ev: NativeSyntheticEvent<NativeTouchEvent>
                        ) => void
                    }
                />
            ) : (
                <Button title="Next" onPress={() => setStep(step + 1)} />
            )}
            {step == firstStep ? null : (
                <Button title="Previous" onPress={() => setStep(step - 1)} />
            )}
            {createRecipeForms[step]}
            {JSON.stringify(formik.values, null, 2)}
        </div>
    );
}

export default CreateRecipeForm;
