import { Formik, FormikProps } from "formik";
import * as yup from "yup";
import React from "react";
import FormikCreateRecipeFormValues from "./IFormikValues";
import { SafeAreaView, TextInput } from "react-native";

interface IProps {
    formik: FormikProps<FormikCreateRecipeFormValues>;
}

const CreateRecipeFour: React.FC<IProps> = ({ formik }) => {
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
