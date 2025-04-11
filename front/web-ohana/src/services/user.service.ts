import { NewUserRequest } from "../models/new-user-request";
import { UpdateUserRequest } from "../models/update-user-request";
import { UserResponse } from "../models/user-response";
import ApiService from "./api.service";

const UserService = {
  register: async (request: NewUserRequest): Promise<UserResponse> => {
    const response = await ApiService.post<UserResponse>("users", {
      username: request.username,
      password: request.password,
    });

    if (!response.success) {
      throw new Error("Login failed: Token not received");
    }

    console.log("Register response:", response);
    return response.data;
  },
  getAllUsers: async (): Promise<UserResponse[]> => {
    const response = await ApiService.get<UserResponse[]>("users", {});

    if (!response.success) {
      throw new Error("Login failed: Token not received");
    }

    console.log("All Users response", response);
    return response.data;
  },

  getAuthenticatedUser: async (): Promise<UserResponse> => {
    const response = await ApiService.get<UserResponse>("users/me", {});

    if (!response.success) {
      throw new Error("Login failed: Token not received");
    }

    console.log("All Users response", response);
    return response.data;
  },

  updateUserData: async (request: UpdateUserRequest): Promise<UserResponse> => {
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
  },

  updateAuthenticatedUserData: async (
    request: NewUserRequest
  ): Promise<UserResponse> => {
    const response = await ApiService.put<UserResponse>("users/me", {
      username: request.username,
      password: request.password,
    });

    if (!response.success) {
      throw new Error("Login failed: Token not received");
    }

    console.log("Update Authenticated User response:", response);
    return response.data;
  },

  deleteUser: async (userId: string): Promise<UserResponse> => {
    const response = await ApiService.delete<UserResponse>("users", {
      id: userId,
    });

    if (!response.success) {
      throw new Error("Login failed: Token not received");
    }

    console.log("Delete User response:", response);
    return response.data;
  },
};

export default UserService;
