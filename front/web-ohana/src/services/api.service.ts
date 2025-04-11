// src/services/ApiService.ts
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Result } from "../models/result";

const BASE_URL = `${import.meta.env.VITE_API_URL}`;

const getToken = (): string | null => {
  return localStorage.getItem("token");
};

const getHeaders = (
  accept?: string,
  contentType: string = "application/json"
) => {
  const token = getToken();
  const headers: any = {
    Authorization: token ? `Bearer ${token}` : "",
    "Content-Type": contentType,
  };

  if (accept) headers["Accept"] = accept;

  return headers;
};

async function sendRequest<T>(
  request: Promise<AxiosResponse<any>>
): Promise<Result<T>> {
  try {
    const response = await request;

    return Result.success<T>(response.status, response.data);
  } catch (error: any) {
    return Result.error<T>(
      error.response?.status || -1,
      error.message || "Unknown error"
    );
  }
}

const ApiService = {
  get: async <T = void>(
    path: string,
    params: any = {},
    responseType?: string
  ): Promise<Result<T>> => {
    const config: AxiosRequestConfig = {
      headers: getHeaders(responseType),
      params,
    };

    return sendRequest<T>(axios.get(`${BASE_URL}${path}`, config));
  },

  post: async <T = void>(
    path: string,
    body: any = {},
    contentType?: string
  ): Promise<Result<T>> => {
    const config: AxiosRequestConfig = {
      headers: getHeaders(undefined, contentType),
    };

    return sendRequest<T>(axios.post(`${BASE_URL}${path}`, body, config));
  },

  put: async <T = void>(
    path: string,
    body: any = {},
    contentType?: string
  ): Promise<Result<T>> => {
    const config: AxiosRequestConfig = {
      headers: getHeaders(undefined, contentType),
    };

    return sendRequest<T>(axios.put(`${BASE_URL}${path}`, body, config));
  },

  delete: async <T = void>(
    path: string,
    params: any = {},
    contentType?: string
  ): Promise<Result<T>> => {
    const config: AxiosRequestConfig = {
      headers: getHeaders(undefined, contentType),
      params,
    };

    return sendRequest<T>(axios.delete(`${BASE_URL}${path}`, config));
  },
};

export default ApiService;
