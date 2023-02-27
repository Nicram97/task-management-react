import React, { useContext, useState } from "react";
import { ServiceError } from "../errors/ServiceError";
import { CreateTaskDto } from "../hooks/interfaces/CreateTaskDto";
import { GetTasksParameters } from "../hooks/interfaces/GetTasksParameters";
import { useTaskApi } from "../hooks/task/useTaskApi";
import { Task } from "../Task/interfaces/TaskEntity";

export interface TaskContextType {
    tasks: Task[];
    handleGetTasks: () => Promise<void>;

    handleCreateTask: (createTaskDto: CreateTaskDto) => Promise<Task | undefined>;

    handleDeleteTask: (id: string) => Promise<void>;

    handleGetTaskById: (id: string) => Promise<Task | undefined>;

    getTasksError: ServiceError | undefined;
    setGetTasksError: React.Dispatch<React.SetStateAction<ServiceError | undefined>>;

    deleteTaskError: ServiceError | undefined;
    setDeleteTaskError: React.Dispatch<React.SetStateAction<ServiceError | undefined>>;

    createTaskError: ServiceError | undefined;
    setCreateTaskError: React.Dispatch<React.SetStateAction<ServiceError | undefined>>;

    getTaskByIdError: ServiceError | undefined;
    setGetTaskByIdError: React.Dispatch<React.SetStateAction<ServiceError | undefined>>;
}

const TaskContext = React.createContext<TaskContextType | null>(null);

export const TaskProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    const { getTasks, deleteTask, createTask, getTaskById } = useTaskApi();
    const [tasks, setTasks] = useState<Task[]>([]);
    const [getTasksError, setGetTasksError] = useState<ServiceError>();
    const [deleteTaskError, setDeleteTaskError] = useState<ServiceError>();
    const [createTaskError, setCreateTaskError] = useState<ServiceError>();
    const [getTaskByIdError, setGetTaskByIdError] = useState<ServiceError>();

    const handleGetTasks = async (params?: GetTasksParameters): Promise<void> => {
        try {
            const result = await getTasks(params);
            setTasks(result);
            setGetTasksError(undefined);
        } catch (e) {
            setGetTasksError(e as ServiceError);
        }
    };

    const handleDeleteTask = async (id: string): Promise<void> => {
        try {
            await deleteTask(id);
            await handleGetTasks();
            setDeleteTaskError(undefined);
        } catch (e) {
            setDeleteTaskError(e as ServiceError);
        }
    }

    const handleCreateTask = async (createTaskDto: CreateTaskDto): Promise<Task | undefined> => {
        try {
            const createdTask = await createTask(createTaskDto);
            await handleGetTasks();
            setCreateTaskError(undefined);

            return createdTask;
        } catch (e) {
            setCreateTaskError(e as ServiceError);
        }
    }

    const handleGetTaskById = async (id: string): Promise<Task | undefined> => {
        try {
            const getTask = await getTaskById(id);
            setGetTaskByIdError(undefined);

            return getTask;
        } catch (e) {
            setGetTaskByIdError(e as ServiceError);
        }
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            handleGetTasks,
            handleCreateTask,
            handleDeleteTask,
            getTasksError,
            setGetTasksError,
            deleteTaskError,
            setDeleteTaskError,
            createTaskError,
            setCreateTaskError,
            getTaskByIdError,
            setGetTaskByIdError,
            handleGetTaskById,
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTaskContext = () => useContext(TaskContext);