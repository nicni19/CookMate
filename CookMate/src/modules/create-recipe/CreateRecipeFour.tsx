import { Formik } from "formik";
import React, { useState } from "react";
import { FormCreateRecipeProps, RecipeIngredient } from "./CreateRecipeTypes";
import {
    FlatList,
    NativeSyntheticEvent,
    NativeTouchEvent,
    SafeAreaView,
    TextInput,
    Text,
    View,
    TouchableOpacity
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

    const renderRecipeIngredientItems = ({
        item
    }: {
        item: RecipeIngredient;
    }) => (
        <Text>{item.ingredient + " " + item.quantity + " " + item.unit}</Text>
    );

    return (
        <View>
            <FlatList
                data={recipeIngredients}
                renderItem={renderRecipeIngredientItems}
                initialNumToRender={5}
                maxToRenderPerBatch={10}
                windowSize={10}
            />
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    const updatedRecipeIngredients = recipeIngredients.slice();
                    updatedRecipeIngredients.push(values);
                    formik.setFieldValue(
                        "createRecipeFour.recipeIngredients",
                        updatedRecipeIngredients
                    );
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
                        <TouchableOpacity
                            onPress={
                                handleSubmit as unknown as (
                                    ev: NativeSyntheticEvent<NativeTouchEvent>
                                ) => void
                            }
                        >
                            <Text>Add Ingredient</Text>
                        </TouchableOpacity>
                    </SafeAreaView>
                )}
            </Formik>
        </View>
    );
};

export default CreateRecipeFour;
