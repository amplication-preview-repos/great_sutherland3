import { SortOrder } from "../../util/SortOrder";

export type LocationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
  name?: SortOrder;
  tripId?: SortOrder;
  updatedAt?: SortOrder;
};
