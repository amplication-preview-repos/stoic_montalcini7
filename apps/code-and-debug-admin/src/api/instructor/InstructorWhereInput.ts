import { CourseListRelationFilter } from "../course/CourseListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LiveSessionListRelationFilter } from "../liveSession/LiveSessionListRelationFilter";

export type InstructorWhereInput = {
  courses?: CourseListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  liveSessions?: LiveSessionListRelationFilter;
  name?: StringNullableFilter;
};
