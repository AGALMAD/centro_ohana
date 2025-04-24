import { CreateParagraphRequest } from "./create-paragraph-request";

export interface CreateActivityRequest {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  startTimeStr: string;
  endTimeStr: string;
  postLink: string;
  image: File;
  paragraphs: CreateParagraphRequest[];
}
