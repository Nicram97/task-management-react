import axios, { AxiosError } from "axios";
import { ServiceError } from "../errors/ServiceError";
import { LOGIN_API, REGISTER_API } from "../Routes/AuthRoutes";
import { ERROR_CODE } from "../utils/constants";
import { LoginResponseData } from "./interfaces/LoginResponseData";
import { useApiClient } from "./useAxiosClient";

interface UseAuthApi {
  login(username: string, password: string): Promise<void>;
  register(username: string, password: string): Promise<void>;
}

/**
 * An authentication service hook that exposes login and register methods.
 */
export const useAuthService = (): UseAuthApi => {
  const { axiosInstance, post } = useApiClient();

  /**
   * method which enables login to task management service and obtain access token.
   * @param username {string} - username which is used to compare with existing accounts and login user.
   * @param password {string} - password which is used to compare with existing accounts and login user.
   */
  const login = async (username: string, password: string): Promise<void> => {
    try {
      const res = await post<LoginResponseData>(LOGIN_API, {
        username: username,
        password: password,
      });

      axiosInstance.defaults.headers.common.Authorization = `Bearer ${res.data.accessToken}`;
    } catch (err: unknown | AxiosError) {
      if (axios.isAxiosError(err)) {
        throw new ServiceError(ERROR_CODE.AUTH_SERVICE_ERROR,`Logging failed, ${err.message}`, err.cause);
      }
      console.log('Unexpected error', err);
    }
  };

  /**
   * method which enables registration to task management backend service.
   * @param username {string} - username which will be saved in database and then used to login.
   * @param password {string} - password which will be saved in database and then used to login.
   */
  const register = async (username: string, password: string): Promise<void> => {
    try {
      const res = await post<LoginResponseData>(REGISTER_API, {
        username: username,
        password: password,
      });

      axiosInstance.defaults.headers.common.Authorization = `Bearer ${res.data.accessToken}`;
    } catch (err: unknown | AxiosError) {
      if (axios.isAxiosError(err)) {
        throw new ServiceError(ERROR_CODE.AUTH_SERVICE_ERROR,`Logging failed, ${err.message}`, err.cause);
      }
      console.log('Unexpected error', err);
    }
  };


  return { login, register };
};
