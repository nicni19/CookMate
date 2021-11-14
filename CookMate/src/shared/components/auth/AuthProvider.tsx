import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "./AuthType";
import { ILoginService } from "../../services/QueryServiceInterfaces";

export const AuthContext = React.createContext<{
    user: User;
    signIn: (username: string, password: string) => void;
    signOut: () => void;
}>({
    user: null,
    signIn: (username: string, password: string) => {},
    signOut: () => {}
});

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User>(null);
    return (
        <AuthContext.Provider
            value={{
                user,
                signIn: async (username, password) => {
                    // TODO: call IUserQuery: getUser(id)
                    console.warn("Signed in", username, password);
                    const testUser = {
                        id: "1",
                        firstName: "test",
                        lastName: "test"
                    };
                    setUser(testUser);
                    try {
                        await AsyncStorage.setItem(
                            "user_session",
                            JSON.stringify(testUser)
                        );
                    } catch (err) {
                        console.log(err);
                    }
                },
                signOut: async () => {
                    setUser(null);
                    try {
                        await AsyncStorage.removeItem("user");
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
