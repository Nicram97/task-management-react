import axios, { AxiosError } from "axios";
import { ServiceError } from "../../errors/ServiceError";
import { ERROR_CODE } from "../../utils/constants";

interface UseTasksApi {
    getTasks(status?: string, search?: string): Promise<void>;
    getTaskById(id: string): Promise<void>;
    updateTaskStatus(): Promise<void>;
    deleteTask(id: string): Promise<void>;
    createTask(): Promise<void>;
  }
  
  /**
   * An task service hook that exposes task available methods.
   */
  export const useTaskApi = (): UseTasksApi => {
  
    const getTasks = async (status?: string, search?: string): Promise<void> => {
      try {
        console.log('elo');
      } catch (err: unknown | AxiosError) {
        if (axios.isAxiosError(err)) {
          throw new ServiceError(ERROR_CODE.TASKS_SERVICE_ERROR,`Getting tasks failed, ${err.message}`, err.response?.data.message);
        }
        console.log('Unexpected error', err);
      }
    };

    const getTaskById = async (id: string): Promise<void> => {
        try {
          console.log('elo');
        } catch (err: unknown | AxiosError) {
          if (axios.isAxiosError(err)) {
            throw new ServiceError(ERROR_CODE.TASKS_SERVICE_ERROR,`Getting task by id failed, ${err.message}`, err.response?.data.message);
          }
          console.log('Unexpected error', err);
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
        }
      };

      const deleteTask = async (id: string): Promise<void> => {
        try {
          console.log('elo');
        } catch (err: unknown | AxiosError) {
          if (axios.isAxiosError(err)) {
            throw new ServiceError(ERROR_CODE.TASKS_SERVICE_ERROR,`Deleting task failed, ${err.message}`, err.response?.data.message);
          }
          console.log('Unexpected error', err);
        }
      };
      
      const createTask = async (): Promise<void> => {
        try {
          console.log('elo');
        } catch (err: unknown | AxiosError) {
          if (axios.isAxiosError(err)) {
            throw new ServiceError(ERROR_CODE.TASKS_SERVICE_ERROR,`Create task failed, ${err.message}`, err.response?.data.message);
          }
          console.log('Unexpected error', err);
        }
      };

  
    return { getTasks,  getTaskById, updateTaskStatus, deleteTask, createTask };
  };