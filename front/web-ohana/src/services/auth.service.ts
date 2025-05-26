import { AuthRequest } from "../models/auth-request";
import { AuthResponse } from "../models/auth-response";
import apiService from "./api.service";
import userService from "./user.service";

class AuthService {
  private readonly TOKEN_KEY = "token";
  private readonly LOGIN_URL = "/auth/login";

  constructor() {}

  async login(request: AuthRequest): Promise<AuthResponse> {
    const response = await apiService.post<AuthResponse>(this.LOGIN_URL, {
      username: request.username,
      password: request.password,
    });

    if (!response.success || !response.data?.token) {
      throw new Error("Login failed: Token not received");
    }

    //console.log("Login response:", response);
    //guarda el token
    localStorage.setItem("token", response.data.token);
    apiService.jwt = response.data.token;

    //almacena el usuario autenticado
    userService.currentUser = await userService.getAuthenticatedUser();
    //console.log("Authenticated user:", userService.currentUser);

    return response.data;
  }

  public async logout(): Promise<void> {
    //console.log("Logging out...");
    localStorage.removeItem(this.TOKEN_KEY);
    apiService.jwt = null;
  }
}

export default new AuthService();
