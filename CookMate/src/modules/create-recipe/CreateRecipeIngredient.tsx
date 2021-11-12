import { Formik } from "formik";
import React, { useState } from "react";
import { CreateRecipeFormProps, RecipeIngredient } from "./CreateRecipeTypes";
import {
    FlatList,
    NativeSyntheticEvent,
    NativeTouchEvent,
    TextInput,
    Text,
    TouchableOpacity,
    View,
    KeyboardAvoidingView
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

const initialValues: RecipeIngredient = {
    ingredient: "",
    quantity: "",
    unit: ""
};

const CreateRecipeIngredient: React.FC<CreateRecipeFormProps> = ({
    formik
}) => {
    const [recipeIngredients, setRecipeIngredients] = useState<
        RecipeIngredient[]
    >(formik.values.createRecipeIngredient.recipeIngredients);

    const renderRecipeIngredientItems = ({
        item
    }: {
        item: RecipeIngredient;
    }) => (
        <Text>{item.ingredient + " " + item.quantity + " " + item.unit}</Text>
    );

    const headerHeight = useHeaderHeight();

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                style={{ width: "100%", maxHeight: "50%" }}
                data={recipeIngredients}
                renderItem={renderRecipeIngredientItems}
                initialNumToRender={5}
                maxToRenderPerBatch={10}
                windowSize={10}
                keyExtractor={(ingredient, idx) => ingredient.ingredient + idx}
            />
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    const updatedRecipeIngredients = recipeIngredients.slice();
                    updatedRecipeIngredients.push(values);
                    formik.setFieldValue(
                        "createRecipeIngredient.recipeIngredients",
                        updatedRecipeIngredients
                    );
                    setRecipeIngredients(updatedRecipeIngredients);
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <KeyboardAvoidingView
                        behavior="padding"
                        enabled
                        style={{ flex: 1 }}
                        keyboardVerticalOffset={headerHeight}
                    >
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
                    </KeyboardAvoidingView>
                )}
            </Formik>
        </View>
    );
};

export default CreateRecipeIngredient;
