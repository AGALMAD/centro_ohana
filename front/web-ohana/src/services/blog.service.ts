import { Activity } from "../models/activity";
import { NewPostRequest } from "../models/new-post-request";
import { Post } from "../models/post";
import apiService from "./api.service";

class BlogService {
  async getAllPosts() {
    const response = await apiService.get<Post[]>("/blog");
    if (!response.success) {
      throw new Error("Failed to fetch all posts.");
    }
    return response.data;
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
    formData.append("date", post.date);
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
    formData.append("date", post.date);
    formData.append("image", post.image);

    if (post.image) {
      formData.append("image", post.image);
    }

    const response = await apiService.put<Activity>(`/post`, formData);

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
      throw new Error("Failed to delete activity");
    }
  }
}

export default new BlogService();
