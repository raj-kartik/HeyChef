import React, {createContext, useContext,useState} from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [isAuthenticated, setAuthenicated] = useState(false);

    const login = () => setAuthenicated(true);
    const logout = () => setAuthenicated(false);

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}} >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = ()=>{
    return useContext(AuthContext);
};
