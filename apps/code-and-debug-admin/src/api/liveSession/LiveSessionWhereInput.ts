import { StringFilter } from "../../util/StringFilter";
import { InstructorWhereUniqueInput } from "../instructor/InstructorWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LiveSessionWhereInput = {
  id?: StringFilter;
  instructor?: InstructorWhereUniqueInput;
  scheduledTime?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  zoomLink?: StringNullableFilter;
};
