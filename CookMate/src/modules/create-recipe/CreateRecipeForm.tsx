import { FormikProvider, useFormik } from "formik";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { View, GestureResponderEvent } from "react-native";
import * as Yup from "yup";
import CreateRecipeInstruction from "./CreateRecipeInstruction";
import CreateRecipeIngredient from "./CreateRecipeIngredient";
import CreateRecipeImagePick from "./CreateRecipeImagePick";
import CreateRecipeInformation from "./CreateRecipeInformation";
import { FormikCreateRecipeFormValues } from "./CreateRecipeTypes";
import { CreateRecipeNavProps } from "../../shared/components/navigation/param-lists/CreateRecipeParamList";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./CreateRecipeStyles/CreateRecipeStyles";
import { theme } from "../../shared/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import QueryService from "../../shared/services/QueryService";
import { AuthContext } from "../../shared/components/auth/AuthProvider";
import { Recipe } from "../../shared/view-models/Recipe";
import { RecipeSimple } from "../../shared/view-models/RecipeSimple";
import { Ingredient } from "../../shared/view-models/Ingredient";
import { Unit } from "../../shared/view-models/Unit";
import { Instruction } from "../../shared/view-models/Instruction";

const initialValues: FormikCreateRecipeFormValues = {
    createRecipeImagePick: null,
    createRecipeInformation: {
        recipeName: "",
        recipeDescription: "",
        recipeTime: 0,
        recipePeople: 0
    },
    createRecipeIngredient: {
        recipeIngredients: []
    },
    createRecipeInstruction: {
        recipeInstructions: []
    }
};

interface CreateRecipeFormProps {
    createRecipeNavProps: CreateRecipeNavProps<"CreateRecipeScreen">;
}

const CreateRecipeForm: React.FC<CreateRecipeFormProps> = ({
    createRecipeNavProps
}) => {
    const [step, setStep] = useState<number>(0);
    const [cookbookId, setCookbookId] = useState<string | null>(null);
    const { user } = useContext(AuthContext);

    const headerNavOptions = {
        previous: () => (
            <TouchableOpacity
                style={{ marginLeft: "20%" }}
                onPress={() => setStep(step - 1)}
            >
                <AntDesign
                    name="arrowleft"
                    size={24}
                    color="black"
                    backgroundColor="transparent"
                />
            </TouchableOpacity>
        ),
        next: () => (
            <TouchableOpacity
                style={{ marginRight: "20%" }}
                onPress={() => setStep(step + 1)}
            >
                <AntDesign
                    name="arrowright"
                    size={24}
                    color={theme.palette.secondaryColor}
                    backgroundColor="transparent"
                />
            </TouchableOpacity>
        ),
        check: () => (
            <TouchableOpacity
                style={{ marginRight: "20%" }}
                onPress={
                    formik.handleSubmit as unknown as ((
                        event: GestureResponderEvent
                    ) => void) &
                        (() => void)
                }
                disabled={!(formik.isValid && formik.dirty)}
            >
                <AntDesign
                    name="checkcircle"
                    size={24}
                    color={
                        formik.isValid && formik.dirty
                            ? theme.palette.secondaryColor
                            : theme.palette.backgroundColor
                    }
                    backgroundColor="transparent"
                />
            </TouchableOpacity>
        )
    };

    useLayoutEffect(() => {
        createRecipeNavProps.navigation.setOptions({
            headerTitle: createRecipeFormsName[step]
        });

        const firstStep = 0;
        const lastStep = createRecipeForms.length - 1;
        {
            step == firstStep
                ? createRecipeNavProps.navigation.setOptions({
                      headerLeft: undefined
                  })
                : createRecipeNavProps.navigation.setOptions({
                      headerLeft: headerNavOptions.previous
                  });
        }
        {
            step == lastStep
                ? createRecipeNavProps.navigation.setOptions({
                      headerRight: headerNavOptions.check
                  })
                : createRecipeNavProps.navigation.setOptions({
                      headerRight: headerNavOptions.next
                  });
        }
    }, [createRecipeNavProps.navigation, step]);

    useEffect(() => {
        const { getUserCookbook } = QueryService.cookbooks;
        async () => {
            const { id } = await getUserCookbook(user?.id as string);
            setCookbookId(id);
        } 
    }, []);

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object({
            createRecipeInformation: Yup.object({
                recipeName: Yup.string().required(),
                recipeDescription: Yup.string().required(),
                recipeTime: Yup.number().required(),
                recipePeople: Yup.number().required()
            }),
            createRecipeIngredient: Yup.object({
                recipeIngredients: Yup.array().min(1, "Ingredients list cannot be empty").required()
            }),
            createRecipeInstruction: Yup.object({
                recipeInstructions: Yup.array()
            })
        }),
        onSubmit: (values) => {
            formik.resetForm();
            const { recipeName, recipeDescription, recipePeople, recipeTime } = values.createRecipeInformation;
            const imageURI = values.createRecipeImagePick;
            const ingredients = values.createRecipeIngredient.recipeIngredients;
            const instructions = values.createRecipeInstruction.recipeInstructions;

            const newIngredientsType: Ingredient[] = [];
            for(let i = 0; i < ingredients.length; i++) {
                const unit: Unit = new Unit(ingredients[i].unit, ingredients[i].unit);
                const ingredient: Ingredient = new Ingredient(ingredients[i].id.toString(), ingredients[i].ingredient, unit, ingredients[i].quantity);
                newIngredientsType.push(ingredient);
            }

            const newInstructionsType: Instruction[] = [];
            for(let i = 0; i < instructions.length; i++) {
                const instruction: Instruction = new Instruction("0", instructions[i].sortingNumber, instructions[i].text);
                newInstructionsType.push(instruction);
            }

            const recipeSimple: RecipeSimple = new RecipeSimple("0", recipeName, recipeTime, recipePeople, imageURI as string);
            const recipe: Recipe = new Recipe(recipeSimple, recipeDescription, newInstructionsType, newIngredientsType);

            const { addRecipe } = QueryService.recipes;
            console.log(addRecipe(cookbookId as string, recipe));
            console.warn(values);
        }
    });

    const createRecipeFormsName: string[] = [
        "Select image of your dish",
        "Enter recipe details",
        "Enter recipe ingredients",
        "Enter recipe instructions"
    ];

    const createRecipeForms: JSX.Element[] = [
        <CreateRecipeImagePick formik={formik} />,
        <CreateRecipeInformation formik={formik} />,
        <CreateRecipeIngredient formik={formik} />,
        <CreateRecipeInstruction formik={formik} />
    ];

    return <View style={styles.root}>{createRecipeForms[step]}</View>;
};

export default CreateRecipeForm;
