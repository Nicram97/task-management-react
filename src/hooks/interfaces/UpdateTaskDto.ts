import { TaskStatus } from "../../Task/interfaces/TaskProperties";

export interface UpdateTaskDto {
    status: TaskStatus;
}