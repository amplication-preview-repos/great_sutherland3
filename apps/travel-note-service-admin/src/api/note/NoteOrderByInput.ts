import { SortOrder } from "../../util/SortOrder";

export type NoteOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  createdDate?: SortOrder;
  id?: SortOrder;
  tripId?: SortOrder;
  updatedAt?: SortOrder;
};
