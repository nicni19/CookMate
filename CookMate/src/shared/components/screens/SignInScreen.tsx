import React from "react";
import { SignIn } from "../../../modules/user/SignIn";
import { AuthNavProps } from "../navigation/param-lists/AuthParamList";

type SignInScreenProps = {} & AuthNavProps<"SignInScreen">;

export const SignInScreen: React.FC<SignInScreenProps> = (props) => {
    return <SignIn {...props} />;
};
