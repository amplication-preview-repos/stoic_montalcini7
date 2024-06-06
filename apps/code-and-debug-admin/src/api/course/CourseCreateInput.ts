import { InstructorWhereUniqueInput } from "../instructor/InstructorWhereUniqueInput";
import { LessonCreateNestedManyWithoutCoursesInput } from "./LessonCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  description?: string | null;
  instructor?: InstructorWhereUniqueInput | null;
  lessons?: LessonCreateNestedManyWithoutCoursesInput;
  price?: number | null;
  title?: string | null;
};
