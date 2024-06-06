import { SortOrder } from "../../util/SortOrder";

export type LiveSessionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  instructorId?: SortOrder;
  scheduledTime?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  zoomLink?: SortOrder;
};
