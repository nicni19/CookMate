import { Formik, FormikProps } from "formik";
import * as yup from "yup";
import React from "react";
import { SafeAreaView, TextInput } from "react-native";
import { FormCreateRecipeProps } from "./CreateRecipeTypes";

const CreateRecipeThree: React.FC<FormCreateRecipeProps> = ({ formik }) => {
    return (
        <SafeAreaView>
            <TextInput
                onChangeText={value => formik.setFieldValue("createRecipeThree.recipeName", value)}
                value={formik.values.createRecipeThree.recipeName}
                placeholder={"Name of the recipe"}
            />

            <TextInput
                onChangeText={value => formik.setFieldValue("createRecipeThree.recipeDescription", value)}
                value={formik.values.createRecipeThree.recipeDescription}
                placeholder={"Description"}
            />

            <TextInput
                onChangeText={value => formik.setFieldValue("createRecipeThree.recipeTime", value)}
                value={formik.values.createRecipeThree.recipeTime}
                placeholder={"Estimated cooking time"}
            />
            <TextInput
                onChangeText={value => formik.setFieldValue("createRecipeThree.recipePeople", value)}
                value={formik.values.createRecipeThree.recipePeople}
                placeholder={"For how many people"}
            />
        </SafeAreaView>
    );
};

export default CreateRecipeThree;
