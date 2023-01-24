import React from 'react';
import { Link } from 'react-router-dom';
const Login: React.FC = () => {
    const handleSubmit = (event: React.SyntheticEvent): void => {
        event.preventDefault();
    };

    return (
        <div className="card-body p-5 text-center">
            <div className="mb-md-3 mt-md-3 pb-3">
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">Please enter your login and password!</p>
                <div className="form-outline form-white mb-4">
                    <input
                        type="text"
                        id="username"
                        placeholder='Username'
                        className="form-control form-control-lg bg-transparent"
                        style={{color: 'white'}}
                    />
                </div>
                <div className="form-outline form-white mb-4">
                    <input type="password"
                        id="typePasswordX"
                        placeholder='Password'
                        className="form-control form-control-lg bg-transparent"
                        style={{color: 'white'}}
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