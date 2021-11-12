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
import * as Yup from "yup";
import { AuthNavProps } from "../../shared/components/navigation/param-lists/AuthParamList";

type SignInProps = {} & AuthNavProps<"SignIn">;

const initialValues: ISignIn = {
    username: "",
    password: ""
};

const validationSchema = {
    validationSchema: Yup.object({
        username: Yup.string().required(),
        password: Yup.string().required()
    })
};

export const SignIn: React.FC<SignInProps> = ({ navigation }) => {
    const { signIn } = useContext(AuthContext);

    const handleSubmit = () => {
        signIn();
    };

    return (
        <Center>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
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
            <TouchableOpacity onPress={() => navigation.push("SignUp")}>
                <Text>Don't have an account? Sign up</Text>
            </TouchableOpacity>
        </Center>
    );
};
