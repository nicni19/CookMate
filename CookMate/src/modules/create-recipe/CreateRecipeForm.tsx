import { useFormik } from "formik";
import React, { useState } from "react";
import {
    StyleSheet,
    NativeSyntheticEvent,
    NativeTouchEvent,
    View,
    Text
} from "react-native";
import * as Yup from "yup";
import CreateRecipeFive from "./CreateRecipeFive";
import CreateRecipeFour from "./CreateRecipeFour";
import CreateRecipeOne from "./CreateRecipeOne";
import CreateRecipeThree from "./CreateRecipeThree";
import { FormikCreateRecipeFormValues } from "./CreateRecipeTypes";
import Icon from "react-native-vector-icons/AntDesign";

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
        <CreateRecipeThree formik={formik} />,
        <CreateRecipeFour formik={formik} />,
        <CreateRecipeFive formik={formik} />
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
        <View style={styles.container}>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default CreateRecipeForm;
