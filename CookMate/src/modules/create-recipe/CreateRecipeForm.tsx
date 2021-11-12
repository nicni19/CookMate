import { useFormik } from "formik";
import React, { useState } from "react";
import {
    StyleSheet,
    NativeSyntheticEvent,
    NativeTouchEvent,
    SafeAreaView,
    Text
} from "react-native";
import * as Yup from "yup";
import CreateRecipeInstruction from "./CreateRecipeInstruction";
import CreateRecipeIngredient from "./CreateRecipeIngredient";
import CreateRecipeImagePick from "./CreateRecipeImagePick";
import CreateRecipeInformation from "./CreateRecipeInformation";
import { FormikCreateRecipeFormValues } from "./CreateRecipeTypes";
import Icon from "react-native-vector-icons/AntDesign";
import { Center } from "../../shared/components/style/Center";

const initialValues: FormikCreateRecipeFormValues = {
    createRecipeImagePick: null,
    createRecipeInformation: {
        recipeName: "",
        recipeDescription: "",
        recipeTime: "",
        recipePeople: ""
    },
    createRecipeIngredient: {
        recipeIngredients: []
    },
    createRecipeInstruction: {
        recipeInstructions: []
    }
};

function CreateRecipeForm() {
    const [step, setStep] = useState<number>(0);

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object({
            createRecipeInformation: Yup.object({
                recipeName: Yup.string().required(),
                recipeDescription: Yup.string().required(),
                recipeTime: Yup.number().required(),
                recipePeople: Yup.number().required()
            }),
            createRecipeIngredient: Yup.object({
                recipeIngredients: Yup.array()
            }),
            createRecipeInstruction: Yup.object({
                recipeInstructions: Yup.array()
            })
        }),
        onSubmit: (values) => {
            console.warn(values);
            console.warn("test");
        }
    });

    const createRecipeForms: JSX.Element[] = [
        <CreateRecipeImagePick formik={formik} />,
        <CreateRecipeInformation formik={formik} />,
        <CreateRecipeIngredient formik={formik} />,
        <CreateRecipeInstruction formik={formik} />
    ];

    const createRecipeFormsName: JSX.Element[] = [
        <Text>Select image of your dish</Text>,
        <Text>Enter recipe details</Text>,
        <Text>Enter recipe ingredients</Text>,
        <Text>Enter recipe instructions</Text>
    ];

    const firstStep = 0;
    const lastStep = createRecipeForms.length - 1;

    return (
        <Center>
            <SafeAreaView>
                {step == firstStep ? null : (
                    <Icon.Button
                        name="arrowleft"
                        size={30}
                        backgroundColor="transparent"
                        onPress={() => setStep(step - 1)}
                        iconStyle={{ color: "grey" }}
                    />
                )}
                {step == lastStep ? (
                    <Icon.Button
                        name="check"
                        size={30}
                        onPress={
                            formik.handleSubmit as unknown as (
                                ev: NativeSyntheticEvent<NativeTouchEvent>
                            ) => void
                        }
                    />
                ) : (
                    <Icon.Button
                        name="arrowright"
                        size={30}
                        onPress={() => setStep(step + 1)}
                    />
                )}
                {createRecipeFormsName[step]}
                {createRecipeForms[step]}
            </SafeAreaView>
        </Center>
    );
}

export default CreateRecipeForm;
