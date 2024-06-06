import { Course } from "../course/Course";
import { LiveSession } from "../liveSession/LiveSession";

export type Instructor = {
  courses?: Array<Course>;
  createdAt: Date;
  email: string | null;
  id: string;
  liveSessions?: Array<LiveSession>;
  name: string | null;
  updatedAt: Date;
};
