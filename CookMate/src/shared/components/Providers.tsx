import React from "react";
import { Routes } from "./Routes";
import { AuthProvider } from "./auth/AuthProvider";
import {UserProfileScreen} from "./screens/UserProfileScreen/UserProfileScreen";
import {User} from "../view-models/User";

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = () => {
    const user1 = new User("1", "Andreas", "Pedersen", []);
    return (
        <UserProfileScreen user={user1}/>

        /*<AuthProvider>
            <Routes />
        </AuthProvider>*/
    );
};
