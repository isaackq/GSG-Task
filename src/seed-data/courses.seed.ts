import { Course } from "entites/Course";
import { CourseCategoryEnum } from "enums/course-category.enum";

export const coursesData: Course[] = [
  {
    id: "c1",
    title: "TypeScript Basics",
    description: "Learn the fundamentals of TypeScript.",
    instructorId: "u3",
    category: CourseCategoryEnum.Programming,
    durationHours: 4,
  },
  {
    id: "c2",
    title: "Advanced React",
    description: "Deep dive into React hooks and patterns.",
    instructorId: "u3",
    category: CourseCategoryEnum.WebDevelopment,
    durationHours: 6,
  },
  {
    id: "c3",
    title: "Databases 101",
    description: "Intro to relational and NoSQL databases.",
    instructorId: "u3",
    category: CourseCategoryEnum.DataBase,
    durationHours: 5,
  },
];
