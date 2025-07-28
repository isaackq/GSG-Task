import { CourseCategoryEnum } from "enums/course-category.enum";

export interface Course {
  id: string;
  title: string;
  description: string;
  instructorId?: string;
  category: CourseCategoryEnum;
  durationHours: number;
}
