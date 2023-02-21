import React, { useContext, useState } from "react";
import { ServiceError } from "../errors/ServiceError";
import { GetTasksParameters } from "../hooks/interfaces/GetTasksParameters";
import { useTaskApi } from "../hooks/task/useTaskApi";
import { Task } from "../Task/interfaces/TaskEntity";

export interface TaskContextType {
    tasks: Task[];
    handleGetTasks: () => Promise<void>;

    handleDeleteTask: (id: string) => Promise<void>;

    taskError: ServiceError | undefined;
}

const TaskContext = React.createContext<TaskContextType | null>(null);

export const TaskProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    const { getTasks, deleteTask } = useTaskApi();
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskError, setTaskError] = useState<ServiceError>();

    const handleGetTasks = async (params?: GetTasksParameters): Promise<void> => {
        try {
            const result = await getTasks(params);
            setTasks(result);
        } catch (e) {
            setTaskError(e as ServiceError);
        }
    };

    const handleDeleteTask = async (id: string): Promise<void> => {
        try {
            await deleteTask(id);
            await handleGetTasks();
        } catch (e) {
            setTaskError(e as ServiceError);
        }
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            handleGetTasks,
            handleDeleteTask,
            taskError,
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTaskContext = () => useContext(TaskContext);