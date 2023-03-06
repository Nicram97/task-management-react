import { UpdateTaskDto } from "../../hooks/interfaces/UpdateTaskDto";

export interface EditTaskModalProps {
    id: string;
    show: boolean;
    handleClose: () => void;
    onSubmit: (e: React.SyntheticEvent, id: string, updateTaskDto: UpdateTaskDto) => Promise<void>;
};