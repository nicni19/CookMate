import React from "react";
import { Center } from "../../shared/components/style/Center";
import {
    KeyboardAvoidingView,
    NativeSyntheticEvent,
    NativeTouchEvent,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { ISignUp } from "./UserLoginTypes";
import { Formik } from "formik";
import * as Yup from "yup";
import { AuthNavProps } from "../../shared/components/navigation/param-lists/AuthParamList";
import { styles } from "./UserStyles/UserLoginStyles";

type SignUpProps = {} & AuthNavProps<"SignUp">;

const initialValues: ISignUp = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
};

const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
        .email("Email is not valid")
        .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmedPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
    )
});

export const SignUp: React.FC<SignUpProps> = ({ navigation }) => {
    const handleSubmit = (values: ISignUp) => {
        console.warn(values);
        navigation.push("SignIn");
    };

    return (
        <View style={styles.root}>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => handleSubmit(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <KeyboardAvoidingView
                        behavior={Platform.select({
                            android: undefined,
                            ios: "padding"
                        })}
                        enabled
                        style={styles.form}
                    >
                        <TextInput
                            style={styles.textfield}
                            onChangeText={handleChange("username")}
                            onBlur={handleBlur("username")}
                            value={values.username}
                            placeholder={"Username"}
                        />

                        <TextInput
                            style={styles.textfield}
                            onChangeText={handleChange("email")}
                            onBlur={handleBlur("email")}
                            value={values.email}
                            placeholder={"Email"}
                        />

                        <TextInput
                            style={styles.textfield}
                            secureTextEntry={true}
                            onChangeText={handleChange("password")}
                            onBlur={handleBlur("password")}
                            value={values.password}
                            placeholder={"Password"}
                        />

                        <TextInput
                            style={styles.textfield}
                            secureTextEntry={true}
                            onChangeText={handleChange("confirmPassword")}
                            onBlur={handleBlur("confirmPassword")}
                            value={values.confirmPassword}
                            placeholder={"Confirm Password"}
                        />

                        <TouchableOpacity
                            style={styles.button}
                            onPress={
                                handleSubmit as unknown as (
                                    ev: NativeSyntheticEvent<NativeTouchEvent>
                                ) => void
                            }
                        >
                            <Text style={styles.btnText}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ flexBasis: "100%", marginTop: "5%" }}
                            onPress={() => navigation.push("SignIn")}
                        >
                            <Text style={styles.secondaryBtnText}>
                                Already have an account? Sign in
                            </Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                )}
            </Formik>
        </View>
    );
};
