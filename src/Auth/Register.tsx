import { Link } from "react-router-dom";

const Register: React.FC = () => {
    return (
        <div className="card-body p-5 text-center">

            <div className="mb-md-3 mt-md-3 pb-3">

                <h2 className="fw-bold mb-2 text-uppercase">Sign up</h2>
                <p className="text-white-50 mb-5">To create an account, please enter your login and password!</p>

                <div className="form-outline form-white mb-4">
                    <input type="email" id="typeEmailX" placeholder='Username' className="form-control form-control-lg bg-transparent" style={{color: 'white'}}/>
                </div>

                <div className="form-outline form-white mb-4">
                    <input type="password" id="typePasswordX" placeholder='Password' className="form-control form-control-lg bg-transparent" style={{color: 'white'}}/>
                </div>
                <button className="btn btn-outline-light btn-lg px-5" type="submit">Sign up</button>

            </div>

            <div>
                <p className="mb-0">Already have an account? <Link to={'/sign-in'} className="text-white-50 fw-bold">Sign In</Link>
                </p>
            </div>

        </div> 
    );
}

export default Register;