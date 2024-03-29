import { TaskStatus } from "./TaskProperties";

export interface Task {
    id: string;

    title: string;

    description: string;

    status: TaskStatus;
};