import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ServiceError } from "../errors/ServiceError";
import { useAuthService } from "../hooks/useAuthApi";

export interface AuthContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;

    signInError: ServiceError | undefined;
    setSignInError: React.Dispatch<React.SetStateAction<ServiceError | undefined>>;

    signUpError: ServiceError | undefined;
    setSignUpError: React.Dispatch<React.SetStateAction<ServiceError | undefined>>;

    handleSignIn: (username: string, password: string) => Promise<void>;
    handleSignUp: (username: string, password: string) => Promise<void>;
    handleSignOut: () => void;
};

const AuthContext = React.createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [signInError, setSignInError] = useState<ServiceError>();
    const [signUpError, setSignUpError] = useState<ServiceError>();
    const { login, register } = useAuthService();

    const handleSignUp = async (username: string, password: string): Promise<void> => {
        try {
            await register(username, password);
            setSignUpError(undefined);
            setIsLoggedIn(true);
            console.log('successful registration!');
            navigate('/dashboard');
        } catch (e) {
            setSignUpError(e as ServiceError);
        }
    };

    const handleSignIn = async (username: string, password: string): Promise<void> => {
        try {
            await login(username, password);
            setSignInError(undefined);
            setIsLoggedIn(true);
            console.log('successful login!');
            navigate('/dashboard');
        } catch (e) {
            setSignInError(e as ServiceError);
        }
    };

    const handleSignOut = () => {
        setSignInError(undefined);
        setSignUpError(undefined);
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            setIsLoggedIn,
            signInError, 
            setSignInError,
            handleSignIn,
            handleSignUp,
            handleSignOut,
            signUpError,
            setSignUpError,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () =>  useContext(AuthContext);