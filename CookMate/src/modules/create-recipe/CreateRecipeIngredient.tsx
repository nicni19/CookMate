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
    KeyboardAvoidingView,
    Platform
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { styles } from "./CreateRecipeStyles/CreateRecipeStyles";
import * as Yup from "yup";

const initialValues: RecipeIngredient = {
    ingredient: "",
    quantity: "",
    unit: ""
};

const validationSchema = Yup.object({
    ingredient: Yup.string().required(),
    quantity: Yup.string().required(),
    unit: Yup.string().required()
});

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
        <Text style={styles.listItem}>
            {item.quantity + " " + item.unit + " " + item.ingredient}
        </Text>
    );

    const headerHeight = useHeaderHeight();

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <FlatList
                style={styles.list}
                data={recipeIngredients}
                renderItem={renderRecipeIngredientItems}
                initialNumToRender={5}
                maxToRenderPerBatch={10}
                windowSize={10}
                keyExtractor={(ingredient, idx) => ingredient.ingredient + idx}
            />
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
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
                        behavior={Platform.select({
                            android: undefined,
                            ios: "padding"
                        })}
                        enabled
                        style={styles.form}
                        keyboardVerticalOffset={headerHeight}
                    >
                        <TextInput
                            style={styles.textfield}
                            onChangeText={handleChange("ingredient")}
                            onBlur={handleBlur("ingredient")}
                            value={values.ingredient}
                            placeholder={"Ingredient"}
                        />

                        <TextInput
                            style={styles.textfield}
                            onChangeText={handleChange("quantity")}
                            onBlur={handleBlur("quantity")}
                            value={values.quantity}
                            placeholder={"Quantity"}
                        />

                        <TextInput
                            style={styles.textfield}
                            onChangeText={handleChange("unit")}
                            onBlur={handleBlur("unit")}
                            value={values.unit}
                            placeholder={"Unit"}
                        />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={
                                handleSubmit as unknown as (
                                    ev: NativeSyntheticEvent<NativeTouchEvent>
                                ) => void
                            }
                        >
                            <Text style={styles.btnText}>Add Ingredient</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                )}
            </Formik>
        </View>
    );
};

export default CreateRecipeIngredient;
