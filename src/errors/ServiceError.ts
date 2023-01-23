export class ServiceError extends Error {
    code: number;
    cause?: Error | string;
    errorMessage: string;

    constructor(code: number, message: string, cause: Error | string) {
        super(`Task management have failed ${message}, ${code}`);
        this.code = code;
        this.errorMessage = message;

        if(cause) {
            this.cause = cause;
        }
    }
}