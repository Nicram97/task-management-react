import React, { useContext, useState } from "react";
import { ServiceError } from "../errors/ServiceError";
import { CreateTaskDto } from "../hooks/interfaces/CreateTaskDto";
import { GetTasksParameters } from "../hooks/interfaces/GetTasksParameters";
import { UpdateTaskDto } from "../hooks/interfaces/UpdateTaskDto";
import { useTaskApi } from "../hooks/task/useTaskApi";
import { Task } from "../Task/interfaces/TaskEntity";
import { DefaultTaskStatus, SearchTaskStatusType } from "../Task/interfaces/TaskProperties";
import { sortTasksByStatus } from "../utils/helpers";

export interface TaskContextType {
    tasks: Task[];
    handleGetTasks: () => Promise<void>;

    handleTasksSearch: (search: string, status: SearchTaskStatusType) => Promise<void>;

    handleCreateTask: (createTaskDto: CreateTaskDto) => Promise<Task | undefined>;

    handleDeleteTask: (id: string) => Promise<void>;

    handleGetTaskById: (id: string) => Promise<Task | undefined>;

    handleUpdateTask: (id: string, updateTaskDto: UpdateTaskDto) => Promise<Task | undefined>;

    getTasksError: ServiceError | undefined;
    setGetTasksError: React.Dispatch<React.SetStateAction<ServiceError | undefined>>;

    deleteTaskError: ServiceError | undefined;
    setDeleteTaskError: React.Dispatch<React.SetStateAction<ServiceError | undefined>>;

    createTaskError: ServiceError | undefined;
    setCreateTaskError: React.Dispatch<React.SetStateAction<ServiceError | undefined>>;

    getTaskByIdError: ServiceError | undefined;
    setGetTaskByIdError: React.Dispatch<React.SetStateAction<ServiceError | undefined>>;

    updateTaskError: ServiceError | undefined;
    setUpdateTaskError: React.Dispatch<React.SetStateAction<ServiceError | undefined>>;

    showEditTaskModal: boolean;
    setShowEditTaskModal: React.Dispatch<React.SetStateAction<boolean>>;
    handleShowEditTaskModal: (e: React.SyntheticEvent, id: string, state: boolean) => Promise<void>;

    taskToEditId: string;
    setTaskToEditId: React.Dispatch<React.SetStateAction<string>>;

    handleCloseEditTaskModal: () => void;
    onUpdateTaskSubmit: (e: React.SyntheticEvent, id: string, updateTaskDto: UpdateTaskDto) => Promise<void>;
    
}

const TaskContext = React.createContext<TaskContextType | null>(null);

export const TaskProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    const { getTasks, deleteTask, createTask, getTaskById, updateTaskStatus } = useTaskApi();
    const [tasks, setTasks] = useState<Task[]>([]);
    const [getTasksError, setGetTasksError] = useState<ServiceError>();
    const [deleteTaskError, setDeleteTaskError] = useState<ServiceError>();
    const [createTaskError, setCreateTaskError] = useState<ServiceError>();
    const [getTaskByIdError, setGetTaskByIdError] = useState<ServiceError>();
    const [updateTaskError, setUpdateTaskError] = useState<ServiceError>();
    const [showEditTaskModal, setShowEditTaskModal] = useState<boolean>(false);
    const [taskToEditId, setTaskToEditId] = useState<string>('');

    const handleGetTasks = async (params?: GetTasksParameters): Promise<void> => {
        try {
            const result = await getTasks(params);
            result.sort((a, b) => sortTasksByStatus(a, b)).reverse();
            setTasks(result);
            setGetTasksError(undefined);
        } catch (e) {
            setGetTasksError(e as ServiceError);
        }
    };

    const handleTasksSearch = async (search: string, status: SearchTaskStatusType): Promise<void> => {
        if (status === DefaultTaskStatus.STATUS) {
            await handleGetTasks({search});
        } else {
            await handleGetTasks({search, status})
        }
    }

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

    const handleUpdateTask = async (id: string, updateTaskDto: UpdateTaskDto): Promise<Task | undefined> => {
        try {
            const updateTask = await updateTaskStatus(id, updateTaskDto);
            setUpdateTaskError(undefined);

            return updateTask;
        } catch (e) {
            setUpdateTaskError(e as ServiceError);
        }
    }

    const handleCloseEditTaskModal = () => {
        setShowEditTaskModal(false);
        setUpdateTaskError(undefined);
        setTaskToEditId('');
    }

    const onUpdateTaskSubmit = async (e: React.SyntheticEvent, id: string, updateTaskDto: UpdateTaskDto): Promise<void> => {
        e.preventDefault();
  
        console.log(`Data to update: ${JSON.stringify(updateTaskDto)}`);
        const updateTask = await handleUpdateTask(id, updateTaskDto);
  
        if (updateTask) {
          handleCloseEditTaskModal();
          await handleGetTasks();
        }
    };

    const handleShowEditTaskModal = async (e: React.SyntheticEvent, id: string, state: boolean): Promise<void> => {
        e.stopPropagation();
        setTaskToEditId(id);
        setShowEditTaskModal(true);
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
            handleUpdateTask,
            updateTaskError,
            setUpdateTaskError,
            showEditTaskModal,
            setShowEditTaskModal,
            handleCloseEditTaskModal,
            onUpdateTaskSubmit,
            handleShowEditTaskModal,
            taskToEditId,
            setTaskToEditId,
            handleTasksSearch
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTaskContext = () => useContext(TaskContext);