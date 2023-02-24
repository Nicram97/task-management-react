import { ServiceError } from "../../errors/ServiceError";

export interface CreateTaskFormProps {
    onSubmit: (e: React.SyntheticEvent, title: string, description: string) => Promise<void>;
    error?: ServiceError | undefined;
}