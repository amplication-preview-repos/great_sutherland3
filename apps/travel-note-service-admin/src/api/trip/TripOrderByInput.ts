import { SortOrder } from "../../util/SortOrder";

export type TripOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  destination?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
