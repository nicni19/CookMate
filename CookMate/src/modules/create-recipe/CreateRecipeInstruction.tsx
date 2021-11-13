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
    Platform,
    Alert,
    Modal
} from "react-native";
import { CreateRecipeFormProps, RecipeInstruction } from "./CreateRecipeTypes";
import { useHeaderHeight } from "@react-navigation/elements";
import { styles } from "./CreateRecipeStyles/CreateRecipeStyles";
import * as Yup from "yup";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Center } from "../../shared/components/style/Center";

const initialValues: RecipeInstruction = {
    sortingNumber: -1,
    text: ""
};

const validationSchema = Yup.object({
    text: Yup.string().required()
});

const CreateRecipeInstruction: React.FC<CreateRecipeFormProps> = ({
    formik
}) => {
    const [recipeInstructions, setRecipeInstructions] = useState<
        RecipeInstruction[]
    >(formik.values.createRecipeInstruction.recipeInstructions);

    const [modalVisible, setModalVisible] = useState(false);

    const [selectedInstruction, setSelectedInstruction] =
        useState<RecipeInstruction | null>(null);

    const updateRecipeInstructionsValues = (
        updatedRecipeInstructions: RecipeInstruction[]
    ) => {
        formik.setFieldValue(
            "createRecipeInstruction.recipeInstructions",
            updatedRecipeInstructions
        );
        setRecipeInstructions(updatedRecipeInstructions);
    };

    const addRecipeInstruction = (values: RecipeInstruction) => {
        const updatedRecipeInstructions = recipeInstructions.slice();
        updatedRecipeInstructions.push(values);
        updatedRecipeInstructions.forEach(
            (item, idx) =>
                (updatedRecipeInstructions[idx].sortingNumber = idx + 1)
        );
        updateRecipeInstructionsValues(updatedRecipeInstructions);
    };

    const deleteRecipeInstruction = () => {
        const updatedRecipeInstructions = recipeInstructions.filter(
            (instruction) =>
                instruction.sortingNumber !== selectedInstruction?.sortingNumber
        );
        updatedRecipeInstructions.forEach(
            (item, idx) =>
                (updatedRecipeInstructions[idx].sortingNumber = idx + 1)
        );
        updateRecipeInstructionsValues(updatedRecipeInstructions);
    };

    const onListItemPress = (instruction: RecipeInstruction) => {
        setSelectedInstruction(instruction);
    };

    const renderRecipeInstructionItems = ({
        item
    }: {
        item: RecipeInstruction;
    }) => (
        <TouchableOpacity
            onPress={() => {
                onListItemPress(item);
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.listItemView}>
                <Text style={styles.listItem}>
                    {item.sortingNumber + ". " + item.text}
                </Text>
                <FontAwesome5 name="grip-lines" color="grey" size={20} />
            </View>
        </TouchableOpacity>
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
                data={recipeInstructions}
                renderItem={renderRecipeInstructionItems}
                initialNumToRender={5}
                maxToRenderPerBatch={10}
                windowSize={10}
                keyExtractor={(instruction, idx) => instruction.text + idx}
            />
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    addRecipeInstruction(values);
                    resetForm();
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
                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Center>
                                <View style={styles.modalView}>
                                    <View style={styles.modalViewTextfieldIcon}>
                                        <TextInput
                                            style={styles.modalViewTextfield}
                                            value={selectedInstruction?.text}
                                            placeholder={"Instruction"}
                                        />
                                        <AntDesign
                                            style={{ marginLeft: "5%" }}
                                            name="delete"
                                            color="red"
                                            size={22}
                                            onPress={() => {
                                                deleteRecipeInstruction();
                                                setModalVisible(!modalVisible);
                                            }}
                                        />
                                    </View>
                                    <TouchableOpacity
                                        onPress={() =>
                                            setModalVisible(!modalVisible)
                                        }
                                    >
                                        <Text style={styles.modalViewCloseBtn}>
                                            Close
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </Center>
                        </Modal>
                        <TextInput
                            style={styles.textfield}
                            onChangeText={handleChange("text")}
                            onBlur={handleBlur("text")}
                            value={values.text}
                            placeholder={"Instruction"}
                            clearButtonMode="always"
                        />

                        <TouchableOpacity
                            style={styles.button}
                            onPress={
                                handleSubmit as unknown as (
                                    ev: NativeSyntheticEvent<NativeTouchEvent>
                                ) => void
                            }
                        >
                            <Text style={styles.btnText}>Add Instruction</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                )}
            </Formik>
        </View>
    );
};

export default CreateRecipeInstruction;
