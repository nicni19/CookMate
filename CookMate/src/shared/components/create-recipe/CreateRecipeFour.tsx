import { Formik, FormikProps } from "formik";
import * as yup from "yup";
import React from "react";
import { FormCreateRecipeProps } from "./IFormikValues";
import { SafeAreaView, TextInput } from "react-native";

const CreateRecipeFour: React.FC<FormCreateRecipeProps> = ({ formik }) => {
    return (
        <SafeAreaView>
            <TextInput
                onChangeText={formik.handleChange}
                value={
                    formik.values.createRecipeFour.recipeIngredients.ingredient
                }
                placeholder={"Ingredient"}
            />

            <TextInput
                onChangeText={formik.handleChange}
                value={
                    formik.values.createRecipeFour.recipeIngredients.quantity
                }
                placeholder={"Quantity"}
            />

            <TextInput
                onChangeText={formik.handleChange}
                value={formik.values.createRecipeFour.recipeIngredients.unit}
                placeholder={"Unit"}
            />
        </SafeAreaView>
    );
};

export default CreateRecipeFour;
