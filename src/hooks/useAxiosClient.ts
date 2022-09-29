/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ApiClient } from '../utils/ApiClient';

/**
 * A custom hook created to use an axios instance and return the axiosClient with both get and post methods.
 */
interface UseAxiosClient {
  post<T = any>(url: string, data?: any): Promise<AxiosResponse<T>>;
  get<T = any>(url: string): Promise<AxiosResponse<T>>;
  axiosInstance: AxiosInstance;
}

export const useApiClient = (): UseAxiosClient => {
  const axiosClient = new ApiClient(axios);

  const post = <T = any>(url: string, data?: any): Promise<AxiosResponse<T>> => axiosClient.request({
    url,
    method: 'post',
    data,
    headers: {
      ContentType: 'application/json',
    },
  });

  const get = <T = any>(url: string): Promise<AxiosResponse<T>> => axiosClient.request({
    url,
    method: 'get',
    headers: {
      ContentType: 'application/json',
    },
  });

  return { axiosInstance: axiosClient.getAxiosInstance(), get, post };
};
