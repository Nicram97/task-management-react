import { ServiceError } from "../errors/ServiceError";
import { ERROR_CODE } from "../utils/constants";

const LoginValidationAlert: React.FC<ServiceError> = ({code, cause, errorMessage}) => {
    return (
        <div className="alert alert-danger" role="alert">
            <h5 className="alert-heading">Error {ERROR_CODE[code]} {typeof cause === 'string' ? cause : null}</h5>
            <p>{errorMessage}</p>
            <hr />
            <p className="mb-0">Please check provided data</p>
        </div>
    );
}

export default LoginValidationAlert;