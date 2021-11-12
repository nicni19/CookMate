import { useFormik } from "formik";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
    StyleSheet,
    NativeSyntheticEvent,
    NativeTouchEvent,
    SafeAreaView,
    Text,
    View
} from "react-native";
import * as Yup from "yup";
import CreateRecipeInstruction from "./CreateRecipeInstruction";
import CreateRecipeIngredient from "./CreateRecipeIngredient";
import CreateRecipeImagePick from "./CreateRecipeImagePick";
import CreateRecipeInformation from "./CreateRecipeInformation";
import { FormikCreateRecipeFormValues } from "./CreateRecipeTypes";
import { CreateRecipeNavProps } from "../../shared/components/navigation/param-lists/CreateRecipeParamList";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./CreateRecipeStyles/CreateRecipeStyles";

const initialValues: FormikCreateRecipeFormValues = {
    createRecipeImagePick: null,
    createRecipeInformation: {
        recipeName: "",
        recipeDescription: "",
        recipeTime: "",
        recipePeople: ""
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

    useEffect(() => {
        createRecipeNavProps.navigation.setOptions({
            headerTitle: "Create Recipe"
        });
    }, []);

    const headerNavOptions = {
        previous: () => (
            <AntDesign.Button
                name="arrowleft"
                size={24}
                color="black"
                backgroundColor="transparent"
                onPress={() => setStep(step - 1)}
            />
        ),
        next: () => (
            <AntDesign.Button
                name="arrowright"
                size={24}
                color="black"
                backgroundColor="transparent"
                onPress={() => setStep(step + 1)}
            />
        ),
        check: () => (
            <AntDesign.Button
                name="checkcircle"
                size={24}
                color="black"
                backgroundColor="transparent"
                onPress={
                    formik.handleSubmit as unknown as (
                        ev: NativeSyntheticEvent<NativeTouchEvent>
                    ) => void
                }
            />
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
                recipeIngredients: Yup.array()
            }),
            createRecipeInstruction: Yup.object({
                recipeInstructions: Yup.array()
            })
        }),
        onSubmit: (values) => {
            console.warn(values);
            console.warn("test");
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

    return (
        <View style={styles.root}>
            {createRecipeForms[step]}
        </View>
    );
};

export default CreateRecipeForm;
