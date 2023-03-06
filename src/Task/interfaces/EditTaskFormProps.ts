import { UpdateTaskDto } from "../../hooks/interfaces/UpdateTaskDto";

export interface EditTaskFormProps {
    id: string;
    onSubmit: (e: React.SyntheticEvent, id: string, updateTaskDto: UpdateTaskDto) => Promise<void>;
}