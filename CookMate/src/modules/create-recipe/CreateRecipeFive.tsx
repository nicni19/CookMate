import { Formik, FormikProps } from "formik";
import React, { useState } from "react";
import {
    Button,
    NativeSyntheticEvent,
    NativeTouchEvent,
    SafeAreaView,
    TextInput
} from "react-native";
import { FormCreateRecipeProps, RecipeInstruction } from "./CreateRecipeTypes";

const initialValues: RecipeInstruction = {
    instruction: ""
};

const CreateRecipeFive: React.FC<FormCreateRecipeProps> = ({ formik }) => {
    const [recipeInstructions, setRecipeInstructions] = useState<
        RecipeInstruction[]
    >(formik.values.createRecipeFive.recipeInstructions);

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                const updatedRecipeInstructions = recipeInstructions.slice();
                updatedRecipeInstructions.push(values);
                formik.setFieldValue(
                    "createRecipeFive.recipeInstructions",
                    updatedRecipeInstructions
                );
                setRecipeInstructions(updatedRecipeInstructions);
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <SafeAreaView>
                    <TextInput
                        onChangeText={handleChange("instruction")}
                        onBlur={handleBlur("instruction")}
                        value={values.instruction}
                        placeholder={"Instruction"}
                    />

                    <Button
                        onPress={
                            handleSubmit as unknown as (
                                ev: NativeSyntheticEvent<NativeTouchEvent>
                            ) => void
                        }
                        title="Add Instruction"
                    />
                </SafeAreaView>
            )}
        </Formik>
    );
};

export default CreateRecipeFive;
