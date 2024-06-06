import { Instructor } from "../instructor/Instructor";
import { Lesson } from "../lesson/Lesson";

export type Course = {
  createdAt: Date;
  description: string | null;
  id: string;
  instructor?: Instructor | null;
  lessons?: Array<Lesson>;
  price: number | null;
  title: string | null;
  updatedAt: Date;
};
