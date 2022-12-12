import { Course } from "../entities/course.entity";

export default function adapterCourseFields (dataListCourses: Array<Course>) {
  for (const course of dataListCourses) {
    course.dateTimeCreate = course.dateTimeCreate;
  }
  return dataListCourses;
}