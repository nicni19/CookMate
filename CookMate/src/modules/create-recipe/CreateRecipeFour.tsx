import { Formik } from "formik";
import React, { useState } from "react";
import { FormCreateRecipeProps, RecipeIngredient } from "./CreateRecipeTypes";
import {
    Button,
    NativeSyntheticEvent,
    NativeTouchEvent,
    SafeAreaView,
    TextInput
} from "react-native";

const initialValues: RecipeIngredient = {
    ingredient: "",
    quantity: "",
    unit: ""
};

const CreateRecipeFour: React.FC<FormCreateRecipeProps> = ({ formik }) => {
    const [recipeIngredients, setRecipeIngredients] = useState<
        RecipeIngredient[]
    >(formik.values.createRecipeFour.recipeIngredients);

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                const updatedRecipeIngredients = recipeIngredients.slice();
                updatedRecipeIngredients.push(values);
                formik.setFieldValue("createRecipeFour.recipeIngredients", updatedRecipeIngredients);
                setRecipeIngredients(updatedRecipeIngredients);
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <SafeAreaView>
                    <TextInput
                        onChangeText={handleChange("ingredient")}
                        onBlur={handleBlur("ingredient")}
                        value={values.ingredient}
                        placeholder={"Ingredient"}
                    />

                    <TextInput
                        onChangeText={handleChange("quantity")}
                        onBlur={handleBlur("quantity")}
                        value={values.quantity}
                        placeholder={"Quantity"}
                    />

                    <TextInput
                        onChangeText={handleChange("unit")}
                        onBlur={handleBlur("unit")}
                        value={values.unit}
                        placeholder={"Unit"}
                    />
                    <Button
                        onPress={
                            handleSubmit as unknown as (
                                ev: NativeSyntheticEvent<NativeTouchEvent>
                            ) => void
                        }
                        title="Add"
                    />
                </SafeAreaView>
            )}
        </Formik>
    );
};

export default CreateRecipeFour;
