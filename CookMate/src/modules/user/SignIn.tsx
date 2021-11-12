import React, { useContext, useState } from "react";
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
import { AuthContext } from "../../shared/components/auth/AuthProvider";
import { Formik } from "formik";
import { ISignIn } from "./UserLoginTypes";
import * as Yup from "yup";
import { AuthNavProps } from "../../shared/components/navigation/param-lists/AuthParamList";
import { styles } from "./UserStyles/UserLoginStyles";
import QueryService from "../../shared/services/QueryService";
import { Center } from "../../shared/components/style/Center";

type SignInProps = {} & AuthNavProps<"SignIn">;

const initialValues: ISignIn = {
    username: "",
    password: ""
};

const validationSchema = Yup.object({
    username: Yup.string().required(),
    password: Yup.string().required()
});

export const SignIn: React.FC<SignInProps> = ({ navigation }) => {
    const [signInError, setSignInError] = useState<string | null>(null);
    const { signIn } = useContext(AuthContext);

    const handleSubmit = (values: ISignIn) => {
        const { username, password } = values;
        const { requestLogin } = QueryService.authentication;
        
        const userId = requestLogin(username, password);

        if(userId) {
            signIn(userId);
        } else {
            setSignInError("Username and password don't match");
            console.warn(signInError);
        }    
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
                            secureTextEntry={true}
                            onChangeText={handleChange("password")}
                            onBlur={handleBlur("password")}
                            value={values.password}
                            placeholder={"Password"}
                        />

                        <TouchableOpacity
                            style={styles.button}
                            onPress={
                                handleSubmit as unknown as (
                                    ev: NativeSyntheticEvent<NativeTouchEvent>
                                ) => void
                            }
                        >
                            <Text style={styles.btnText}>Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ flexBasis: "100%", marginTop: "5%"  }}
                            onPress={() => navigation.push("SignUp")}
                        >
                            <Text style={styles.secondaryBtnText}>
                                Don't have an account? Sign up
                            </Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                )}
            </Formik>
        </View>
    );
};
