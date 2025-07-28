import { Course } from "entites/Course";
import { BaseRepository } from "./base.repository";
import { coursesData } from "seed-data/courses.seed";

export class CourseRepository extends BaseRepository<Course> {
  private static _instance: CourseRepository | null;
  constructor() {
    super(coursesData);
  }

  static get instance(): CourseRepository {
    return (this._instance ??= new CourseRepository());
  }
}
