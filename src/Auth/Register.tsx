import { useState } from "react";
import { Link } from "react-router-dom";
import { authSchema } from "../utils/schemas/auth.schema";
import { reach, ValidationError } from 'yup';

const Register: React.FC = () => {
    const [isUserNameValid, setIsUsernameValid] =  useState<boolean>(false);
    const [usernameError, setUsernameError] = useState<string>('');
    const [isPasswordValid, setIsPasswordValid] =  useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<string>('');
    const isFormValid = isUserNameValid && isPasswordValid;

    const handleSubmit = (event: React.SyntheticEvent): void => {
        event.preventDefault();
        
    };

    const validateUsername = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
        event.preventDefault();

        try {
            const subSchema = reach(authSchema, 'username');
            await subSchema.validate(event.target.value);
            setIsUsernameValid(true);
        } catch (e) {
            console.error(e);
            if (e instanceof ValidationError) {
                setUsernameError(e.message);
            }
            setIsUsernameValid(false);
        }
    };

    const validatePassword = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
        event.preventDefault();
        
        try {
            const subSchema = reach(authSchema, 'password');
            await subSchema.validate(event.target.value);
            setIsPasswordValid(true);
        } catch (e) {
            console.error(e);
            if (e instanceof ValidationError) {
                setPasswordError(e.message);
            }
            setIsPasswordValid(false);
        }
    };
    return (
        <div className="card-body p-5 text-center">
            <div className="mb-md-3 mt-md-3 pb-3">
                <h2 className="fw-bold mb-2 text-uppercase">
                    Sign up
                </h2>
                <p className="text-white-50 mb-5">
                    To create an account, please enter your login and password!
                </p>
                <div className="container mb-4">
                    <div className="form-outline form-white mb-0">
                        <input
                            type="text" 
                            id="username"
                            placeholder='Username'
                            className="form-control form-control-lg bg-transparent"
                            style={{color: 'white'}}
                            onChange={validateUsername}
                        />
                    </div>
                    {
                        usernameError && !isUserNameValid
                        ?
                        <p className="text-danger mb-0">
                            <small>{usernameError}</small>
                        </p>
                        : 
                        null
                    }
                </div>
                <div className="container mb-4">
                    <div className="form-outline form-white mb-0">
                        <input
                            type="password"
                            id="typePasswordX" 
                            placeholder='Password'
                            className="form-control form-control-lg bg-transparent"
                            style={{color: 'white'}}
                            onChange={validatePassword}
                        />
                    </div>
                    {
                        passwordError && !isPasswordValid 
                        ?
                        <p className="text-danger mb-0">
                            <small>{passwordError}</small>
                        </p> 
                        : null
                    }
                </div>
                <button 
                    className="btn btn-outline-light btn-lg px-5"
                    type="submit"
                    onClick={handleSubmit}
                    disabled={!isFormValid}>
                    Sign up
                </button>
            </div>
            <div>
                <p className="mb-0">Already have an account?
                    <Link to={'/sign-in'} className="text-white-50 fw-bold">Sign In</Link>
                </p>
            </div>
        </div> 
    );
}

export default Register;