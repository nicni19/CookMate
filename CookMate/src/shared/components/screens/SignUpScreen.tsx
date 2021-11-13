import React from "react";
import { SignUp } from "../../../modules/user/SignUp";
import { AuthNavProps } from "../navigation/param-lists/AuthParamList";

type SignUpScreenProps = {} & AuthNavProps<"SignUpScreen">;

export const SignUpScreen: React.FC<SignUpScreenProps> = (props) => {
    return <SignUp {...props} />;
};