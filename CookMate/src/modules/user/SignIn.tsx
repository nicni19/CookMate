import React, { useContext } from "react";
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
    const { signIn } = useContext(AuthContext);

    const handleSubmit = (values: ISignIn) => {
        // TODO: call ILoginService authenticate (return id) else -1
        const { username, password } = values;
        // TODO: signIn with id if authenticated else error
        signIn("1");
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
