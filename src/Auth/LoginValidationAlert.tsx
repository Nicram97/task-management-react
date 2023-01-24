import { ServiceError } from "../errors/ServiceError";

const LoginValidationAlert: React.FC<ServiceError> = ({code, cause, message}) => {
    return (
        <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Error {code} {typeof cause === 'string' ? cause : null}</h4>
            <p>{message}</p>
            <hr />
            <p className="mb-0">Please check provided data</p>
        </div>
    );
}

export default LoginValidationAlert;