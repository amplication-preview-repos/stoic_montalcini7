import { InstructorWhereUniqueInput } from "../instructor/InstructorWhereUniqueInput";

export type LiveSessionCreateInput = {
  instructor?: InstructorWhereUniqueInput | null;
  scheduledTime?: Date | null;
  title?: string | null;
  zoomLink?: string | null;
};
