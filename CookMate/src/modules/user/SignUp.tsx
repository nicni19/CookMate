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
import { AuthNavProps } from "../../shared/components/navigation/param-lists/AuthParamList";

type SignUpProps = {} & AuthNavProps<"SignUp">;

const initialValues: ISignUp = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
};

const validationSchema = Yup.object({
    username: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    confirmedPassword: Yup.string().required()
});

export const SignUp: React.FC<SignUpProps> = ({ navigation }) => {
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
                            onChangeText={handleChange("username")}
                            onBlur={handleBlur("username")}
                            value={values.username}
                            placeholder={"Username"}
                        />

                        <TextInput
                            onChangeText={handleChange("email")}
                            onBlur={handleBlur("email")}
                            value={values.email}
                            placeholder={"Email"}
                        />

                        <TextInput
                            onChangeText={handleChange("password")}
                            onBlur={handleBlur("password")}
                            value={values.password}
                            placeholder={"Password"}
                        />

                        <TextInput
                            onChangeText={handleChange("confirmPassword")}
                            onBlur={handleBlur("confirmPassword")}
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
            <TouchableOpacity onPress={() => navigation.push("SignIn")}>
                <Text>Already have an account? Sign in</Text>
            </TouchableOpacity>
        </Center>
    );
};
