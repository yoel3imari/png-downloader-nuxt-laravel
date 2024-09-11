import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";
import { tokenService } from "./tokenService";

class ApiService {
  private api: AxiosInstance;
  private token: string | null = null;

  constructor(baseURL: string) {
    this.api = axios.create({
      baseURL: baseURL + "/api",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    // Optionally add interceptors
    this.api.interceptors.request.use(
      async (config) => {
        // Add token or other headers
        this.token = await tokenService.getToken();
        if (this.token) {
          config.headers["Authorization"] = `Bearer ${this.token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.api.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.api.get(url, config);
    return response.data;
  }

  async post<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.api.post(url, data, config);
    return response.data;
  }

  async put<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.api.put(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.api.delete(url, config);
    return response.data;
  }

  async postWithFile<T>(
    url: string,
    data: FormData,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const configWithFile = {
      headers: {
        "Content-Type": "multipart/form-data",
        ...config?.headers,
      },
      ...config,
    };

    const response = await this.api.post(url, data, configWithFile);
    return response.data;
  }
}

export default ApiService;
