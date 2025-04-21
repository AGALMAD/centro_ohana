import { NewUserRequest } from "../models/new-user-request";
import { UpdateUserRequest } from "../models/update-user-request";
import { UserResponse } from "../models/user-response";
import apiService from "./api.service";
import ApiService from "./api.service";

class UserService {
  public currentUser: UserResponse | null = null;

  constructor() {}

  public async register(request: NewUserRequest): Promise<UserResponse> {
    const response = await ApiService.post<UserResponse>("users", {
      username: request.username,
      password: request.password,
    });

    if (!response.success) {
      throw new Error("Login failed: Token not received");
    }

    console.log("Register response:", response);
    return response.data;
  }

  public async getAllUsers(): Promise<UserResponse[]> {
    const response = await ApiService.get<UserResponse[]>("users", {});

    if (!response.success) {
      throw new Error("Login failed: Token not received");
    }

    console.log("All Users response", response);
    return response.data;
  }

  public async getAuthenticatedUser(): Promise<UserResponse> {
    const response = await ApiService.get<UserResponse>("users/me", {});

    if (!response.success) {
      throw new Error("Login failed: Token not received");
    }

    console.log("Authenticated user response", response);
    return response.data;
  }

  public async updateUserData(
    request: UpdateUserRequest
  ): Promise<UserResponse> {
    const response = await ApiService.put<UserResponse>("users", {
      id: request.id,
      username: request.username,
      password: request.password,
    });

    if (!response.success) {
      throw new Error("Login failed: Token not received");
    }

    console.log("Update User response:", response);
    return response.data;
  }

  public async deleteUser(userId: string): Promise<UserResponse> {
    const response = await ApiService.delete<UserResponse>("users", {
      id: userId,
    });

    if (!response.success) {
      throw new Error("Login failed: Token not received");
    }

    console.log("Delete User response:", response);
    return response.data;
  }
}

export default new UserService();
