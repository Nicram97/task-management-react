import axios, { AxiosError } from "axios";
import { ServiceError } from "../../errors/ServiceError";
import { TASKS_API } from "../../Routes/TasksRoutes";
import { Task } from "../../Task/interfaces/TaskEntity";
import { ERROR_CODE } from "../../utils/constants";
import { GetTasksParameters } from "../interfaces/GetTasksParameters";
import { useApiClient } from "../useAxiosClient";

interface UseTasksApi {
    getTasks(params?: GetTasksParameters): Promise<Task[]>;
    getTaskById(id: string): Promise<void>;
    updateTaskStatus(): Promise<void>;
    deleteTask(id: string): Promise<void>;
    createTask(): Promise<void>;
  }
  
  /**
   * An task service hook that exposes task available methods.
   */
  export const useTaskApi = (): UseTasksApi => {
    const { post, get, del } = useApiClient();
  
    const getTasks = async (params?: GetTasksParameters): Promise<Task[]> => {
      try {
        const result = await get(TASKS_API, params);
        return result.data as Task[];
      } catch (err: unknown | AxiosError) {
        if (axios.isAxiosError(err)) {
          throw new ServiceError(ERROR_CODE.TASKS_SERVICE_ERROR,`Getting tasks failed, ${err.message}`, err.response?.data.message);
        }
        console.error('Unexpected error', err);
        throw new Error(`Unexpected error occurred ${err}`);
      }
    };

    const getTaskById = async (id: string): Promise<void> => {
        try {
          console.log('elo');
        } catch (err: unknown | AxiosError) {
          if (axios.isAxiosError(err)) {
            throw new ServiceError(ERROR_CODE.TASKS_SERVICE_ERROR,`Getting task by id failed, ${err.message}`, err.response?.data.message);
          }
          console.error('Unexpected error', err);
          throw new Error(`Unexpected error occurred ${err}`);
        }
      };

      const updateTaskStatus = async (): Promise<void> => {
        try {
          console.log('elo');
        } catch (err: unknown | AxiosError) {
          if (axios.isAxiosError(err)) {
            throw new ServiceError(ERROR_CODE.TASKS_SERVICE_ERROR,`Update task status failed, ${err.message}`, err.response?.data.message);
          }
          console.log('Unexpected error', err);
          throw new Error(`Unexpected error occurred ${err}`);
        }
      };

      const deleteTask = async (id: string): Promise<void> => {
        try {
          await del(`${TASKS_API}/${id}`);
        } catch (err: unknown | AxiosError) {
          if (axios.isAxiosError(err)) {
            throw new ServiceError(ERROR_CODE.TASKS_SERVICE_ERROR,`Deleting task failed, ${err.message}`, err.response?.data.message);
          }
          console.error('Unexpected error', err);
          throw new Error(`Unexpected error occurred ${err}`);
        }
      };
      
      const createTask = async (): Promise<void> => {
        try {
          console.log('elo');
        } catch (err: unknown | AxiosError) {
          if (axios.isAxiosError(err)) {
            throw new ServiceError(ERROR_CODE.TASKS_SERVICE_ERROR,`Create task failed, ${err.message}`, err.response?.data.message);
          }
          console.error('Unexpected error', err);
          throw new Error(`Unexpected error occurred ${err}`);
        }
      };

  
    return { getTasks,  getTaskById, updateTaskStatus, deleteTask, createTask };
  };