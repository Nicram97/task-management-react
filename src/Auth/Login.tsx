import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContextType, useAuthContext } from '../context/authContext';
import LoginValidationAlert from './LoginValidationAlert';
const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { authError, handleSignIn: handleLogin } = useAuthContext() as AuthContextType;


    const handleSubmit = async (event: React.SyntheticEvent): Promise<void> => {
        event.preventDefault();
        handleLogin(username, password);
    };

    const handleUsername = (event: React.FocusEvent<HTMLInputElement>): void => {
        setUsername(event.target.value);
    };

    const handlePassword = (event: React.FocusEvent<HTMLInputElement>): void => {
        setPassword(event.target.value);
    }

    return (
        <div className="card-body p-5 text-center">
            <div className="mb-md-3 mt-md-3 pb-3">
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">Please enter your login and password!</p>
                {typeof authError !== "undefined" && <LoginValidationAlert {...authError}/>}
                <div className="form-outline form-white mb-4">
                    <input
                        type="text"
                        id="username"
                        placeholder='Username'
                        className="form-control form-control-lg bg-transparent"
                        style={{color: 'white'}}
                        onBlur={handleUsername}
                    />
                </div>
                <div className="form-outline form-white mb-4">
                    <input type="password"
                        id="typePasswordX"
                        placeholder='Password'
                        className="form-control form-control-lg bg-transparent"
                        style={{color: 'white'}}
                        onBlur={handlePassword}
                    />
                </div>
                <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={handleSubmit}>
                    Sign in
                </button>
            </div>
            <div>
                <p className="mb-0">
                    Don't have an account? 
                    <Link
                        to={'/sign-up'} 
                        className="text-white-50 fw-bold">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;