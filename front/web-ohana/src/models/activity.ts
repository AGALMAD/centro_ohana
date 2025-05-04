import { Paragraph } from "./paragraph";

export interface Activity {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  postLink: string;
  paragraphs: Paragraph[];
}
