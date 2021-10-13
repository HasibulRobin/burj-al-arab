import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allProperty = useFirebase();
    return (
        <AuthContext.Provider value={allProperty}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;