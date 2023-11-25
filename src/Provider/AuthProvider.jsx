/* eslint-disable react/prop-types */
import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {


    const authinfo = {};
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;