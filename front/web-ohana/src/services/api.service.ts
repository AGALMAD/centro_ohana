import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Result } from "../models/result";

class ApiService {
  private readonly TOKEN_KEY = "token";
  private readonly BASE_URL = `${import.meta.env.VITE_SERVER_URL}/api`;

  public jwt: string | null = null;

  constructor() {
    this.jwt = localStorage.getItem(this.TOKEN_KEY) || null;
  }

  private getHeaders(
    accept?: string,
    contentType: string = "application/json"
  ): Record<string, string> {
    const token = this.jwt;
    const headers: Record<string, string> = {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": contentType,
    };

    if (accept) headers["Accept"] = accept;

    return headers;
  }

  private async sendRequest<T>(
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

  async get<T = void>(
    path: string,
    params: any = {},
    responseType?: string
  ): Promise<Result<T>> {
    const config: AxiosRequestConfig = {
      headers: this.getHeaders(responseType),
      params,
    };

    return this.sendRequest<T>(axios.get(`${this.BASE_URL}${path}`, config));
  }

  async post<T = void>(
    path: string,
    body: any = {},
    contentType?: string
  ): Promise<Result<T>> {
    const config: AxiosRequestConfig = {
      headers: this.getHeaders(undefined, contentType),
    };

    if (body instanceof FormData) {
      delete config.headers["Content-Type"];
    }

    return this.sendRequest<T>(
      axios.post(`${this.BASE_URL}${path}`, body, config)
    );
  }

  async put<T = void>(
    path: string,
    body: any = {},
    contentType?: string
  ): Promise<Result<T>> {
    const config: AxiosRequestConfig = {
      headers: this.getHeaders(undefined, contentType),
    };

    if (body instanceof FormData) {
      delete config.headers["Content-Type"];
    }
    return this.sendRequest<T>(
      axios.put(`${this.BASE_URL}${path}`, body, config)
    );
  }

  async delete<T = void>(
    path: string,
    params: any = {},
    contentType?: string
  ): Promise<Result<T>> {
    const config: AxiosRequestConfig = {
      headers: this.getHeaders(undefined, contentType),
      params,
    };

    return this.sendRequest<T>(axios.delete(`${this.BASE_URL}${path}`, config));
  }
}

export default new ApiService();
