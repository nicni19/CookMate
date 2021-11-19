import { Formik } from "formik";
import React, { useEffect, useState } from "react";
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
    Platform,
    Modal,
    TextInputChangeEventData,
    ActivityIndicator
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { styles } from "./CreateRecipeStyles/CreateRecipeStyles";
import * as Yup from "yup";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Center } from "../../shared/components/style/Center";
import { Picker } from "@react-native-picker/picker";
import { UnitTypes } from "../../shared/view-models/UnitEnum";
import { Unit } from "../../shared/view-models/Unit";

const initialValues: RecipeIngredient = {
    id: -1,
    ingredient: "",
    quantity: 0,
    unit: new Unit("grams", "g.")
};

const validationSchema = Yup.object({
    ingredient: Yup.string().required(),
    quantity: Yup.number().min(1).required()
});

const CreateRecipeIngredient: React.FC<CreateRecipeFormProps> = ({
    formik
}) => {
    const [recipeIngredients, setRecipeIngredients] = useState<
        RecipeIngredient[]
    >(formik.values.createRecipeIngredient.recipeIngredients);
    const [recipeUnits, setRecipeUnits] = useState<Unit[]>([]);

    const [modalVisible, setModalVisible] = useState(false);

    const [selectedIngredient, setSelectedIngredient] =
        useState<RecipeIngredient | null>(null);

    const onListItemPress = (ingredient: RecipeIngredient) => {
        setSelectedIngredient(ingredient);
    };

    const updateRecipeIngredientsValues = (
        updatedRecipeIngredients: RecipeIngredient[]
    ) => {
        formik.setFieldValue(
            "createRecipeIngredient.recipeIngredients",
            updatedRecipeIngredients
        );
        setRecipeIngredients(updatedRecipeIngredients);
    };

    const addRecipeIngredient = (values: RecipeIngredient) => {
        const updatedRecipeIngredients = recipeIngredients.slice();
        values.id = updatedRecipeIngredients.length + 1;
        updatedRecipeIngredients.push(values);
        updateRecipeIngredientsValues(updatedRecipeIngredients);
    };

    const deleteRecipeIngredient = () => {
        const updatedRecipeIngredients = recipeIngredients.filter(
            (ingredient) => ingredient.id !== selectedIngredient?.id
        );
        updateRecipeIngredientsValues(updatedRecipeIngredients);
    };

    const selectedRecipeIngredientIndex = selectedIngredient?.id as number;

    const handleRecipeIngredientEdit = (
        e: NativeSyntheticEvent<TextInputChangeEventData>,
        inputType: string
    ) => {
        const currentSelectedIngredient =
            recipeIngredients[selectedRecipeIngredientIndex];
        const newValue = e.nativeEvent.text;

        if (inputType === "ingredient") {
            currentSelectedIngredient.ingredient = newValue;
        } else if (inputType === "quantity") {
            currentSelectedIngredient.quantity = newValue as unknown as number;
        }
        updateRecipeIngredientsValues(recipeIngredients);
    };

    const handleRecipeIngredientUnitEdit = (event: Unit) => {
        const currentSelectedIngredient =
            recipeIngredients[selectedRecipeIngredientIndex];
        currentSelectedIngredient.unit = event;
        updateRecipeIngredientsValues(recipeIngredients);
    };

    useEffect(() => {
        const units: Unit[] = [];
        for (const unitName in UnitTypes) {
            const unitSymbol = unitName as keyof typeof UnitTypes;
            const unit: Unit = new Unit(unitName, unitSymbol);
            units.push(unit);
        }
        setRecipeUnits(units);
    }, [setRecipeUnits]);

    const renderRecipeIngredientItems = ({
        item
    }: {
        item: RecipeIngredient;
    }) => (
        <TouchableOpacity
            onPress={() => {
                onListItemPress(item);
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.listItemView}>
                <Text style={styles.listItem}>
                    {item.quantity +
                        " " +
                        item.unit.symbol +
                        " " +
                        item.ingredient}
                </Text>
                <FontAwesome5 name="grip-lines" color="grey" size={20} />
            </View>
        </TouchableOpacity>
    );

    const headerHeight = useHeaderHeight();

    if (recipeUnits.length == 0 || !recipeUnits) {
        return (
            <Center>
                <ActivityIndicator size="large" />
            </Center>
        );
    }

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
                onSubmit={(values, { resetForm }) => {
                    addRecipeIngredient(values);
                    resetForm();
                }}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    isValid,
                    dirty
                }) => (
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
                                            onChange={(event) =>
                                                handleRecipeIngredientEdit(
                                                    event,
                                                    "ingredient"
                                                )
                                            }
                                            value={
                                                recipeIngredients[
                                                    selectedRecipeIngredientIndex
                                                ]?.ingredient
                                            }
                                            placeholder={"Ingredient"}
                                            clearButtonMode="always"
                                        />
                                        <TextInput
                                            style={styles.modalViewTextfield}
                                            onChange={(event) =>
                                                handleRecipeIngredientEdit(
                                                    event,
                                                    "quantity"
                                                )
                                            }
                                            value={
                                                recipeIngredients[
                                                    selectedRecipeIngredientIndex
                                                ]?.quantity as unknown as string
                                            }
                                            placeholder={"Quantity"}
                                            clearButtonMode="always"
                                        />
                                        <Picker
                                            style={styles.textfield}
                                            selectedValue={values.unit}
                                            onValueChange={(event) => {
                                                handleRecipeIngredientUnitEdit(
                                                    event
                                                );
                                            }}
                                        >
                                            {recipeUnits.map((unit, idx) => {
                                                return (
                                                    <Picker.Item
                                                        key={idx}
                                                        label={unit.name}
                                                        value={unit.symbol}
                                                    />
                                                );
                                            })}
                                        </Picker>
                                        <AntDesign
                                            style={{ marginLeft: "5%" }}
                                            name="delete"
                                            color="red"
                                            size={22}
                                            onPress={() => {
                                                deleteRecipeIngredient();
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
                            onChangeText={handleChange("ingredient")}
                            onBlur={handleBlur("ingredient")}
                            value={values.ingredient}
                            placeholder={"Ingredient"}
                            clearButtonMode="always"
                        />

                        <TextInput
                            style={styles.textfield}
                            onChangeText={handleChange("quantity")}
                            onBlur={handleBlur("quantity")}
                            value={values.quantity as unknown as string}
                            placeholder={"Quantity"}
                            clearButtonMode="always"
                        />
                        <Picker
                            style={styles.textfield}
                            selectedValue={values.unit.name}
                            onValueChange={handleChange("unit")}
                            onBlur={handleBlur("unit")}
                        >
                            {recipeUnits.map((unit, idx) => {
                                return (
                                    <Picker.Item
                                        key={idx}
                                        label={unit.name}
                                        value={unit.symbol}
                                    />
                                );
                            })}
                        </Picker>
                        <TouchableOpacity
                            style={
                                isValid && dirty
                                    ? styles.button
                                    : [
                                          styles.button,
                                          { backgroundColor: "grey" }
                                      ]
                            }
                            onPress={
                                handleSubmit as unknown as (
                                    ev: NativeSyntheticEvent<NativeTouchEvent>
                                ) => void
                            }
                            disabled={!(isValid && dirty)}
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
