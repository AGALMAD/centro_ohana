import { NewUserRequest } from "../models/new-user-request";
import { UpdateUserRequest } from "../models/update-user-request";
import { UserResponse } from "../models/user-response";
import apiService from "./api.service";

class UserService {
  public currentUser: UserResponse | null = null;

  constructor() {}

  public async createUser(request: NewUserRequest): Promise<UserResponse> {
    const response = await apiService.post<UserResponse>("users", {
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
    if (!apiService.jwt) {
      throw new Error("No token found");
    }

    const response = await apiService.get<UserResponse[]>("/users", {});

    if (!response.success) {
      throw new Error("Login failed: Token not received");
    }

    console.log("All Users response", response);
    return response.data;
  }

  public async getAuthenticatedUser(): Promise<UserResponse> {
    if (!apiService.jwt) {
      throw new Error("No token found");
    }

    if (this.currentUser) {
      return this.currentUser;
    }

    const response = await apiService.get<UserResponse>("/users/me", {});

    if (!response.success) {
      throw new Error("Login failed: Token not received");
    }

    console.log("Authenticated user response", response);
    return response.data;
  }

  public async updateUserData(
    request: UpdateUserRequest
  ): Promise<UserResponse> {
    const response = await apiService.put<UserResponse>("/users", {
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
    const response = await apiService.delete<UserResponse>(`/users/${userId}`);

    if (!response.success) {
      throw new Error("Delete user failed");
    }

    console.log("Delete User response:", response);
    return response.data;
  }
}

export default new UserService();
