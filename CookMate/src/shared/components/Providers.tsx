import React from "react";
import { Routes } from "./Routes";
import { AuthProvider } from "./auth/AuthProvider";
import {UserProfile} from "../../modules/user-profile-screen/UserProfile";

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = () => {
    return (
        <UserProfile userId={"1"}/>
        /*<AuthProvider>
            <Routes />
        </AuthProvider>*/
    );
};
