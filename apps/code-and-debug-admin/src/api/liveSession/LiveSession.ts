import { Instructor } from "../instructor/Instructor";

export type LiveSession = {
  createdAt: Date;
  id: string;
  instructor?: Instructor | null;
  scheduledTime: Date | null;
  title: string | null;
  updatedAt: Date;
  zoomLink: string | null;
};
