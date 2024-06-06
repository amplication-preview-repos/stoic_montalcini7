import { CourseCreateNestedManyWithoutInstructorsInput } from "./CourseCreateNestedManyWithoutInstructorsInput";
import { LiveSessionCreateNestedManyWithoutInstructorsInput } from "./LiveSessionCreateNestedManyWithoutInstructorsInput";

export type InstructorCreateInput = {
  courses?: CourseCreateNestedManyWithoutInstructorsInput;
  email?: string | null;
  liveSessions?: LiveSessionCreateNestedManyWithoutInstructorsInput;
  name?: string | null;
};
