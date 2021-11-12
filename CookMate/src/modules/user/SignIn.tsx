import React, { useContext } from "react";
import {
    NativeSyntheticEvent,
    NativeTouchEvent,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { AuthContext } from "../../shared/components/auth/AuthProvider";
import { Center } from "../../shared/components/style/Center";
import { Formik } from "formik";
import { ISignIn } from "./UserLoginTypes";

interface SignInProps {}

const initialValues: ISignIn = {
    username: "",
    password: ""
};

export const SignIn: React.FC<SignInProps> = () => {
    const { signIn } = useContext(AuthContext);

    const handleSubmit = () => {
        signIn();
    };

    return (
        <Center>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
                            value={values.password}
                            placeholder={"Password"}
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
