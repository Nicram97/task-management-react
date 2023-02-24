export class ServiceError extends Error {
    code: number;
    cause?: string[] | string;
    errorMessage: string;

    constructor(code: number, message: string, cause: string | string[] | undefined) {
        super(`Task management have failed ${message}, ${code}`);
        this.code = code;
        this.errorMessage = message;

        if(cause) {
            this.cause = cause;
        }
    }
}