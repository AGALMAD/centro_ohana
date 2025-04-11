import { AuthRequest } from "../models/auth-request";
import { AuthResponse } from "../models/auth-response";
import ApiService from "./api.service";

const AuthService = {
  login: async (request: AuthRequest): Promise<AuthResponse> => {
    const response = await ApiService.post<AuthResponse>("auth/login", {
      username: request.username,
      password: request.password,
    });

    if (!response.success || !response.data?.token) {
      throw new Error("Login failed: Token not received");
    }

    console.log("Login response:", response);
    localStorage.setItem("token", response.data.token);
    return response.data;
  },
};

export default AuthService;
