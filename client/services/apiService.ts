import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";
import { tokenService } from "./tokenService";
import { ErrorService } from "./errorService";
import type { ApiResponse } from "~/libs/definitions";

class ApiService {
  private api: AxiosInstance;
  private token: string | null = null;
  private static instance: ApiService | null = null;

  constructor(baseURL: string) {
    if (ApiService.instance !== null) {
      return ApiService.instance;
    }

    this.api = axios.create({
      baseURL: baseURL + "/api",
      withCredentials: true,
      withXSRFToken: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    //this.crsf();

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
        // console.log(response, "apiService Intercept Response");
        return response;
      },
      (error) => {
        // console.log(error, "apiService Intercept Error");
        return Promise.reject(ErrorService.handleError(error));
      }
    );

    ApiService.instance = this;
    return ApiService.instance;
  }

  async crsf() {
    // if (this.api.defaults.headers["X-CSRF-TOKEN"]) return;
    await this.api.get("/sanctum/csrf-cookie", {
      baseURL: process.env.API_BASE_URL || "http://127.0.0.1:8000"
    });
  }

  async get(url: string, config?: AxiosRequestConfig): Promise<ApiResponse> {
    // this.crsf();
    const response = await this.api.get(url, config);
    return response.data;
  }

  async post(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse> {
    // this.crsf();
    const response = await this.api.post(url, data, config);
    return response.data;
  }

  async put(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse> {
    // this.crsf();
    const response = await this.api.put(url, data, config);
    return response.data;
  }

  async delete(url: string, config?: AxiosRequestConfig): Promise<ApiResponse> {
    // this.crsf();
    const response = await this.api.delete(url, config);
    return response.data;
  }

  async postWithFile(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse> {
    // this.crsf();
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
