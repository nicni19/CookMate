import { Formik, FormikProps } from "formik";
import * as yup from "yup";
import React from "react";
import { SafeAreaView, TextInput } from "react-native";
import { CreateRecipeFormProps } from "./CreateRecipeTypes";

const CreateRecipeInformation: React.FC<CreateRecipeFormProps> = ({ formik }) => {
    return (
        <SafeAreaView>
            <TextInput
                onChangeText={(value) =>
                    formik.setFieldValue("createRecipeInformation.recipeName", value)
                }
                value={formik.values.createRecipeInformation.recipeName}
                placeholder={"Name of the recipe"}
            />

            <TextInput
                onChangeText={(value) =>
                    formik.setFieldValue(
                        "createRecipeInformation.recipeDescription",
                        value
                    )
                }
                value={formik.values.createRecipeInformation.recipeDescription}
                placeholder={"Description"}
            />

            <TextInput
                onChangeText={(value) =>
                    formik.setFieldValue("createRecipeInformation.recipeTime", value)
                }
                value={formik.values.createRecipeInformation.recipeTime}
                placeholder={"Estimated cooking time"}
            />
            <TextInput
                onChangeText={(value) =>
                    formik.setFieldValue(
                        "createRecipeInformation.recipePeople",
                        value
                    )
                }
                value={formik.values.createRecipeInformation.recipePeople}
                placeholder={"For how many people"}
            />
        </SafeAreaView>
    );
};

export default CreateRecipeInformation;
