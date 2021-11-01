import { Formik, FormikProps } from "formik";
import * as yup from "yup";
import React from "react";
import { SafeAreaView, TextInput } from "react-native";
import { FormCreateRecipeProps } from "./CreateRecipeTypes";

const CreateRecipeThree: React.FC<FormCreateRecipeProps> = ({ formik }) => {
    return (
        <SafeAreaView>
            <TextInput
                onChangeText={formik.handleChange}
                value={formik.values.createRecipeThree.recipeName}
                placeholder={"Name of the recipe"}
            />

            <TextInput
                onChangeText={formik.handleChange}
                value={formik.values.createRecipeThree.recipeDescription}
                placeholder={"Description"}
            />

            <TextInput
                onChangeText={formik.handleChange}
                value={formik.values.createRecipeThree.recipeTime}
                placeholder={"Estimated cooking time"}
            />
            <TextInput
                onChangeText={formik.handleChange}
                value={formik.values.createRecipeThree.recipePeople}
                placeholder={"For how many people"}
            />
        </SafeAreaView>
    );
};

export default CreateRecipeThree;
