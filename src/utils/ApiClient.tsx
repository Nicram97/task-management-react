import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { BASE_URL } from './constants';

/**
 * ApiClient stands for the customized axios instance holder.
 * This singleton provides a request method to communicate with the dedicated API.
 * @param axiosClient
 */

export class ApiClient {
  private static instance: ApiClient;

  constructor(private readonly axiosClient: AxiosInstance) {
    if (!ApiClient.instance) {
      this.axiosClient = axios.create({
        baseURL: BASE_URL,
        withCredentials: true,
      });

      ApiClient.instance = this;
    }
    return ApiClient.instance;
  }

  /**
   * A generic axios request method.
   * @param config
   */
  async request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    return this.axiosClient.request(config);
  }

  getAxiosInstance(): AxiosInstance {
    return this.axiosClient;
  }

  post(url: string): Promise<AxiosResponse> {
    return this.axiosClient.request({
      url,
      method: 'post',
      headers: {
        ContentType: 'application/json',
      },
    });
  }
}

const instance = new ApiClient(axios);

export default instance;
