import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const createHttpInstance = (baseURL: string): AxiosInstance => {
  return axios.create({
    baseURL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const httpInstance = createHttpInstance('http://localhost:8000');

export const get = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  const response = await httpInstance.get<T>(url, config);
  return response.data;
};

export const post = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
  const response = await httpInstance.post<T>(url, data, config);
  return response.data;
};

export const put = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
  const response = await httpInstance.put<T>(url, data, config);
  return response.data;
};

export const remove = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  const response = await httpInstance.delete<T>(url, config);
  return response.data;
};
