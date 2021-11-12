import { Formik } from "formik";
import React, { useState } from "react";
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
import { ScrollView } from "react-native-gesture-handler";
import { CreateRecipeFormProps, RecipeInstruction } from "./CreateRecipeTypes";
import { useHeaderHeight } from "@react-navigation/elements";
import { styles } from "./CreateRecipeStyles/CreateRecipeStyles";

const initialValues: RecipeInstruction = {
    instruction: ""
};

const CreateRecipeInstruction: React.FC<CreateRecipeFormProps> = ({
    formik
}) => {
    const [recipeInstructions, setRecipeInstructions] = useState<
        RecipeInstruction[]
    >(formik.values.createRecipeInstruction.recipeInstructions);

    const renderRecipeInstructionItems = ({
        item
    }: {
        item: RecipeInstruction;
    }) => <Text>{item.instruction}</Text>;

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
                style={{ width: "100%", maxHeight: "50%" }}
                data={recipeInstructions}
                renderItem={renderRecipeInstructionItems}
                initialNumToRender={5}
                maxToRenderPerBatch={10}
                windowSize={10}
                keyExtractor={(instruction, idx) =>
                    instruction.instruction + idx
                }
            />

            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    const updatedRecipeInstructions =
                        recipeInstructions.slice();
                    updatedRecipeInstructions.push(values);
                    formik.setFieldValue(
                        "createRecipeInstruction.recipeInstructions",
                        updatedRecipeInstructions
                    );
                    setRecipeInstructions(updatedRecipeInstructions);
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <KeyboardAvoidingView
                        behavior={Platform.select({
                            android: undefined,
                            ios: "padding"
                        })}
                        enabled
                        style={{ flex: 1, width: "100%" }}
                        keyboardVerticalOffset={headerHeight}
                    >
                        <View style={styles.form}>
                            <TextInput
                                style={styles.textfield}
                                onChangeText={handleChange("instruction")}
                                onBlur={handleBlur("instruction")}
                                value={values.instruction}
                                placeholder={"Instruction"}
                            />

                            <TouchableOpacity
                                style={styles.button}
                                onPress={
                                    handleSubmit as unknown as (
                                        ev: NativeSyntheticEvent<NativeTouchEvent>
                                    ) => void
                                }
                            >
                                <Text style={styles.btnText}>
                                    Add Instruction
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                )}
            </Formik>
        </View>
    );
};

export default CreateRecipeInstruction;
