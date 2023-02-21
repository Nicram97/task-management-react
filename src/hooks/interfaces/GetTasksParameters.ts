import { TaskStatus } from "../../Task/interfaces/TaskProperties";

export interface GetTasksParameters {
    status?: TaskStatus,
    search?: string,
}