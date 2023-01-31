import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ServiceError } from "../errors/ServiceError";
import { useAuthService } from "../hooks/useAuthApi";

export interface AuthContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;

    authError: ServiceError | undefined;
    setAuthError: React.Dispatch<React.SetStateAction<ServiceError | undefined>>;

    handleSignIn: (username: string, password: string) => Promise<void>;
    handleSignOut: () => void;
};

const AuthContext = React.createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [authError, setAuthError] = useState<ServiceError>();
    const { login } = useAuthService();

    const handleSignIn = async (username: string, password: string): Promise<void> => {
        try {
            await login(username, password);
            setAuthError(undefined);
            setIsLoggedIn(true);
            console.log('successful login!');
            navigate('/dashboard');
        } catch (e) {
            setAuthError(e as ServiceError);
        }
    };

    const handleSignOut = () => {
        setAuthError(undefined);
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            setIsLoggedIn,
            authError, 
            setAuthError,
            handleSignIn,
            handleSignOut,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () =>  useContext(AuthContext);