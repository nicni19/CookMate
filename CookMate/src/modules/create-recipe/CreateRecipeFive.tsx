import { Formik } from "formik";
import React, { useState } from "react";
import {
    FlatList,
    NativeSyntheticEvent,
    NativeTouchEvent,
    SafeAreaView,
    TextInput,
    View,
    Text,
    TouchableOpacity
} from "react-native";
import { FormCreateRecipeProps, RecipeInstruction } from "./CreateRecipeTypes";

const initialValues: RecipeInstruction = {
    instruction: ""
};

const CreateRecipeFive: React.FC<FormCreateRecipeProps> = ({ formik }) => {
    const [recipeInstructions, setRecipeInstructions] = useState<
        RecipeInstruction[]
    >(formik.values.createRecipeFive.recipeInstructions);

    const renderRecipeInstructionItems = ({
        item
    }: {
        item: RecipeInstruction;
    }) => <Text>{item.instruction}</Text>;

    return (
        <View>
            <FlatList
                data={recipeInstructions}
                renderItem={renderRecipeInstructionItems}
                initialNumToRender={5}
                maxToRenderPerBatch={10}
                windowSize={10}
            />

            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    const updatedRecipeInstructions =
                        recipeInstructions.slice();
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

                        <TouchableOpacity
                            onPress={
                                handleSubmit as unknown as (
                                    ev: NativeSyntheticEvent<NativeTouchEvent>
                                ) => void
                            }
                        >
                            <Text>Add Instruction</Text>
                        </TouchableOpacity>
                    </SafeAreaView>
                )}
            </Formik>
        </View>
    );
};

export default CreateRecipeFive;
