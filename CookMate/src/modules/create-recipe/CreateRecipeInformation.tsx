import React from "react";
import { TextInput, View } from "react-native";
import { CreateRecipeFormProps } from "./CreateRecipeTypes";
import { styles } from "./CreateRecipeStyles/CreateRecipeStyles";

const CreateRecipeInformation: React.FC<CreateRecipeFormProps> = ({
    formik
}) => {
    return (
        <View style={styles.informationForm}>
            <TextInput
                style={[
                    styles.textfield,
                    { flexBasis: "100%", marginBottom: "5%", marginTop: "5%" }
                ]}
                onChangeText={(value) =>
                    formik.setFieldValue(
                        "createRecipeInformation.recipeName",
                        value
                    )
                }
                value={formik.values.createRecipeInformation.recipeName}
                placeholder={"Name of the recipe"}
                clearButtonMode="always"
            />

            <TextInput
                style={[
                    styles.textfield,
                    {
                        flexBasis: "100%",
                        height: "30%",
                        marginBottom: "5%",
                        marginTop: "5%"
                    }
                ]}
                onChangeText={(value) =>
                    formik.setFieldValue(
                        "createRecipeInformation.recipeDescription",
                        value
                    )
                }
                value={formik.values.createRecipeInformation.recipeDescription}
                placeholder={"Description"}
                multiline={true}
                numberOfLines={20}
                clearButtonMode="always"
            />

            <TextInput
                style={[
                    styles.textfield,
                    { flexBasis: "100%", marginBottom: "5%", marginTop: "5%" }
                ]}
                onChangeText={(value) =>
                    formik.setFieldValue(
                        "createRecipeInformation.recipeTime",
                        value
                    )
                }
                value={formik.values.createRecipeInformation.recipeTime.toString()}
                placeholder={"Estimated cooking time"}
                clearButtonMode="always"
            />
            <TextInput
                style={[
                    styles.textfield,
                    { flexBasis: "100%", marginBottom: "5%", marginTop: "5%" }
                ]}
                onChangeText={(value) =>
                    formik.setFieldValue(
                        "createRecipeInformation.recipePeople",
                        value
                    )
                }
                value={formik.values.createRecipeInformation.recipePeople.toString()}
                placeholder={"For how many people"}
                clearButtonMode="always"
            />
        </View>
    );
};

export default CreateRecipeInformation;
