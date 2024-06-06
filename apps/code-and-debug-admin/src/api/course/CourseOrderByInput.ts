import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  instructorId?: SortOrder;
  price?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
