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
    formData.append("startDate", activity.startDate);
    formData.append("endDate", activity.endDate);
    formData.append("startTimeStr", activity.startTimeStr);
    formData.append("endTimeStr", activity.endTimeStr);
    formData.append("postLink", activity.postLink);
    formData.append("image", activity.image);
    formData.append("paragraphs", JSON.stringify(activity.paragraphs));

    const response = await apiService.post<Activity>("/activity", activity);
    if (!response.success) {
      throw new Error("Failed to create activity");
    }
    return response.data;
  }
}

export default new ActivityService();
