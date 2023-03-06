export enum TaskStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}

export enum DefaultTaskStatus {
    STATUS = 'STATUS',
}

export type SearchTaskStatusType = DefaultTaskStatus | TaskStatus;

export interface TaskProperties {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
};