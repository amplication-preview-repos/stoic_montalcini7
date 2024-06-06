import { InstructorWhereUniqueInput } from "../instructor/InstructorWhereUniqueInput";

export type LiveSessionUpdateInput = {
  instructor?: InstructorWhereUniqueInput | null;
  scheduledTime?: Date | null;
  title?: string | null;
  zoomLink?: string | null;
};
