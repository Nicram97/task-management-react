import { Task } from "../Task/interfaces/TaskEntity";
import { TaskStatus } from "../Task/interfaces/TaskProperties";

export const sortTasksByStatus = (task1: Task, task2: Task) => {
    if (task1.status === TaskStatus.IN_PROGRESS && task2.status !== TaskStatus.IN_PROGRESS) {
        return 1;
    }

    if (task1.status === TaskStatus.OPEN && task2.status === TaskStatus.DONE) {
        return 1;
    }

    if (task1.status === TaskStatus.DONE && task2.status !== TaskStatus.DONE) {
        return -1;
    }

    if (task1.status !== TaskStatus.IN_PROGRESS && task2.status === TaskStatus.IN_PROGRESS) {
        return -1;
    }

    return 0;

}