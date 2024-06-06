import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InstructorWhereUniqueInput } from "../instructor/InstructorWhereUniqueInput";
import { LessonListRelationFilter } from "../lesson/LessonListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type CourseWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  instructor?: InstructorWhereUniqueInput;
  lessons?: LessonListRelationFilter;
  price?: FloatNullableFilter;
  title?: StringNullableFilter;
};
