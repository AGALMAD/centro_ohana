import { Activity } from "../models/activity";
import { CreateActivityRequest } from "../models/create-activity-request";
import apiService from "./api.service";

class ActivityService {
  async getActivities() {
    const response = await apiService.get<Activity[]>("/activity");
    if (!response.success) {
      throw new Error("Failed to fetch activities");
    }
    return response.data;
  }

  async getActivity(id: string) {
    const response = await apiService.get<Activity>(`/activity/${id}`);
    if (!response.success) {
      throw new Error("Failed to fetch activity");
    }
    return response.data;
  }

  async createActivity(activity: CreateActivityRequest) {
    var formData = new FormData();

    formData.append("title", activity.title);
    formData.append("description", activity.description);
    formData.append("startDateStr", activity.startDate);
    formData.append("endDateStr", activity.endDate);
    formData.append("startTimeStr", activity.startTimeStr);
    formData.append("endTimeStr", activity.endTimeStr);
    formData.append("postLink", activity.postLink);
    formData.append("image", activity.image);
    formData.append("paragraphs", JSON.stringify(activity.paragraphs));

    console.log("FormData", formData);

    const response = await apiService.post<Activity>("/activity", formData);
    console.log("Response", response);
    if (!response.success) {
      throw new Error("Failed to create activity");
    }
    return response.data;
  }

  async updateActivity(id: string, activity: CreateActivityRequest) {
    var formData = new FormData();

    formData.append("id", id);
    formData.append("title", activity.title);
    formData.append("description", activity.description);
    formData.append("startDateStr", activity.startDate);
    formData.append("endDateStr", activity.endDate);
    formData.append("startTimeStr", activity.startTimeStr);
    formData.append("endTimeStr", activity.endTimeStr);
    formData.append("postLink", activity.postLink);

    if (activity.image) {
      formData.append("image", activity.image);
    }

    if (activity.paragraphs && activity.paragraphs.length > 0) {
      formData.append("paragraphs", JSON.stringify(activity.paragraphs));
    }

    const response = await apiService.put<Activity>(`/activity`, formData);

    if (!response.success) {
      throw new Error("Failed to update activity");
    }

    return response.data;
  }

  async deleteActivity(id: string) {
    const response = await apiService.delete(`/activity/${id}`);
    if (!response.success) {
      throw new Error("Failed to delete activity");
    }
    return response.data;
  }
}

export default new ActivityService();
