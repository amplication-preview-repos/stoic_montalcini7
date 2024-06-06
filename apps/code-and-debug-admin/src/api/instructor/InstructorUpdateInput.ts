import { CourseUpdateManyWithoutInstructorsInput } from "./CourseUpdateManyWithoutInstructorsInput";
import { LiveSessionUpdateManyWithoutInstructorsInput } from "./LiveSessionUpdateManyWithoutInstructorsInput";

export type InstructorUpdateInput = {
  courses?: CourseUpdateManyWithoutInstructorsInput;
  email?: string | null;
  liveSessions?: LiveSessionUpdateManyWithoutInstructorsInput;
  name?: string | null;
};
