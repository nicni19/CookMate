import { FormikProps } from "formik";
import React from "react";
import { SafeAreaView, TextInput } from "react-native";
import { FormCreateRecipeProps } from "./CreateRecipeTypes";

const CreateRecipeFive: React.FC<FormCreateRecipeProps> = ({ formik }) => {
    return (
        <SafeAreaView>
            <TextInput
                onChangeText={formik.handleChange}
                value={
                    formik.values.createRecipeFive.recipeInstructions[0]
                }
                placeholder={"Instruction"}
            />
        </SafeAreaView>
    );
};

export default CreateRecipeFive;
