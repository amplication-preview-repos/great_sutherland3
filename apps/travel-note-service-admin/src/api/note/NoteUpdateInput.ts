import { TripWhereUniqueInput } from "../trip/TripWhereUniqueInput";

export type NoteUpdateInput = {
  content?: string | null;
  createdDate?: Date | null;
  trip?: TripWhereUniqueInput | null;
};
