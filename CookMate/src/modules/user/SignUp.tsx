import React from "react";
import { Center } from "../../shared/components/style/Center";
import {
    NativeSyntheticEvent,
    NativeTouchEvent,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { ISignUp } from "./UserLoginTypes";
import { Formik } from "formik";
import * as Yup from "yup";

interface SignUpProps {}

const initialValues: ISignUp = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
};

const validationSchema = {
    validationSchema: Yup.object({
        username: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().required(),
        confirmedPassword: Yup.string().required()
    })
};

export const SignUp: React.FC<SignUpProps> = () => {
    const handleSubmit = (values: ISignUp) => {
        console.log(values);
    };

    return (
        <Center>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => handleSubmit(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <TextInput
                            onChangeText={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                            placeholder={"Username"}
                        />

                        <TextInput
                            onChangeText={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder={"Email"}
                        />

                        <TextInput
                            onChangeText={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder={"Password"}
                        />

                        <TextInput
                            onChangeText={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                            placeholder={"Confirm Password"}
                        />

                        <TouchableOpacity
                            onPress={
                                handleSubmit as unknown as (
                                    ev: NativeSyntheticEvent<NativeTouchEvent>
                                ) => void
                            }
                        >
                            <Text>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </Center>
    );
};
