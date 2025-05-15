import { NewPostRequest } from "../models/new-post-request";
import { Post, PaginatedPosts } from "../models/post";
import { Result } from "../models/result";
import apiService from "./api.service";

class BlogService {
  async getAllPosts(page = 0, size = 5): Promise<Result<PaginatedPosts>> {
    const response = await apiService.get<PaginatedPosts>(
      `/blog?page=${page}&size=${size}`
    );
    if (!response.success) {
      throw new Error("Failed to fetch all posts.");
    }
    return response;
  }

  async getPost(id: string) {
    const response = await apiService.get<Post>(`/blog/${id}`);
    if (!response.success) {
      throw new Error("Failed to fetch post.");
    }
    return response.data;
  }

  async createPost(post: NewPostRequest) {
    var formData = new FormData();

    formData.append("title", post.title);
    formData.append("text", post.text);
    formData.append("image", post.image);

    console.log("FormData de blog", formData);

    const response = await apiService.post<Post>("/blog", formData);
    console.log("Response", response);
    if (!response.success) {
      throw new Error("Error al crear un post nuevo.");
    }
    return response.data;
  }

  async updatePost(id: string, post: NewPostRequest) {
    var formData = new FormData();

    formData.append("title", post.title);
    formData.append("text", post.text);
    formData.append("image", post.image);

    if (post.image) {
      formData.append("image", post.image);
    }

    const response = await apiService.put<Post>(`/post`, formData);

    if (!response.success) {
      throw new Error("Error al actualizar el post");
    }

    return response.data;
  }

  async deletePost(id: string): Promise<Post | null> {
    try {
      const response = await apiService.delete<Post>(`/blog/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to delete post");
    }
  }
}

export default new BlogService();
