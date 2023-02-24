import { ServiceError } from "../ServiceError";
import { ERROR_CODE } from "../../utils/constants";

const Alert: React.FC<ServiceError> = ({code, cause, errorMessage}) => {
    const parseCause = (cause: string | string[] | undefined) => {
        if (Array.isArray(cause)) {
            return cause.join();
        }
        return cause;
    }
    const parsedCause = parseCause(cause);

    return (
        <div className="alert alert-danger" role="alert">
            <h5 className="alert-heading">Error {ERROR_CODE[code]} {errorMessage}</h5>
            <p>{parsedCause}</p>
            <hr />
            <p className="mb-0">Please check provided data</p>
        </div>
    );
}

export default Alert;