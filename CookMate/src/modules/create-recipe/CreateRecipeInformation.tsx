import { Formik, FormikProps } from "formik";
import * as yup from "yup";
import React from "react";
import { SafeAreaView, TextInput, View } from "react-native";
import { CreateRecipeFormProps } from "./CreateRecipeTypes";
import { styles } from "./CreateRecipeStyles/CreateRecipeStyles";

const CreateRecipeInformation: React.FC<CreateRecipeFormProps> = ({
    formik
}) => {
    return (
        <View style={styles.informationForm}>
            <TextInput
                style={[styles.textfield, { maxWidth: "100%" }]}
                onChangeText={(value) =>
                    formik.setFieldValue(
                        "createRecipeInformation.recipeName",
                        value
                    )
                }
                value={formik.values.createRecipeInformation.recipeName}
                placeholder={"Name of the recipe"}
            />

            <TextInput
                style={[styles.textfield, { width: "100%" }]}
                onChangeText={(value) =>
                    formik.setFieldValue(
                        "createRecipeInformation.recipeDescription",
                        value
                    )
                }
                value={formik.values.createRecipeInformation.recipeDescription}
                placeholder={"Description"}
            />

            <TextInput
                style={[styles.textfield, { width: "100%" }]}
                onChangeText={(value) =>
                    formik.setFieldValue(
                        "createRecipeInformation.recipeTime",
                        value
                    )
                }
                value={formik.values.createRecipeInformation.recipeTime}
                placeholder={"Estimated cooking time"}
            />
            <TextInput
                style={[styles.textfield, { width: "100%" }]}
                onChangeText={(value) =>
                    formik.setFieldValue(
                        "createRecipeInformation.recipePeople",
                        value
                    )
                }
                value={formik.values.createRecipeInformation.recipePeople}
                placeholder={"For how many people"}
            />
        </View>
    );
};

export default CreateRecipeInformation;
