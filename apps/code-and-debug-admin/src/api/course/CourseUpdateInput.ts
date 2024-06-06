import { InstructorWhereUniqueInput } from "../instructor/InstructorWhereUniqueInput";
import { LessonUpdateManyWithoutCoursesInput } from "./LessonUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  description?: string | null;
  instructor?: InstructorWhereUniqueInput | null;
  lessons?: LessonUpdateManyWithoutCoursesInput;
  price?: number | null;
  title?: string | null;
};
