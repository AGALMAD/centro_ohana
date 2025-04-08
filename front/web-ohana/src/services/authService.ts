import { AuthRequest } from "../models/auth-request";
import { AuthResponse } from "../models/auth-response";
import ApiService from "./ApiService";

const AuthService = {
  login: async (request: AuthRequest): Promise<AuthResponse> => {
    const response = await ApiService.post<AuthResponse>("auth/login", {
      username: request.username,
      password: request.password,
    });

    console.log("Login response:", response);
    return response.data;
  },
};

export default AuthService;
