export enum TaskStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}

export interface TaskProperties {
    title: string;
    description: string;
    status: TaskStatus;
};