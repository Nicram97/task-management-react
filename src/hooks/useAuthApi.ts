import { LOGIN_API } from "../Routes/AuthRoutes";
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
      const res = await post(LOGIN_API, {
        username: username,
        password: password,
      });
    } catch (e) {

    }
  };

  /**
   * method which enables registration to task management backend service.
   * @param username {string} - username which will be saved in database and then used to login.
   * @param password {string} - password which will be saved in database and then used to login.
   */
  const register = async (username: string, password: string): Promise<void> => {

  };


  return { login, register };
};
