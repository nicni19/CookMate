import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserSession } from "./AuthType";
import QueryService from "../../services/QueryService";
import { User } from "../../view-models/User";

export const AuthContext = React.createContext<{
    user: UserSession;
    signIn: (id: string | undefined) => void;
    signOut: () => void;
}>({
    user: null,
    signIn: () => {},
    signOut: () => {}
});

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<UserSession>(null);
    return (
        <AuthContext.Provider
            value={{
                user,
                signIn: async (id) => {
                    const { getUser } = QueryService.users;
                    const user: User = await getUser(id as string);

                    const userSession: UserSession = { id: user.id, firstName: user.firstName, lastName: user.lastName};
                    console.warn(userSession);
                    setUser(userSession);
                    try {
                        await AsyncStorage.setItem(
                            "user_session",
                            JSON.stringify(userSession)
                        );
                    } catch (err) {
                        console.log(err);
                    }
                },
                signOut: async () => {
                    setUser(null);
                    try {
                        await AsyncStorage.removeItem("user_session");
                    } catch (err) {
                        console.log(err);
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
