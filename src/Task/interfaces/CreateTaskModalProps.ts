import { ServiceError } from "../../errors/ServiceError";

export interface CreateTaskModalProps {
    show: boolean;
    handleClose: () => void;
    onSubmit: (e: React.SyntheticEvent, title: string, description: string) => Promise<void>;
    error?: ServiceError | undefined;
};