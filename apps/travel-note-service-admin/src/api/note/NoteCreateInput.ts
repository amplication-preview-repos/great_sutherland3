import { TripWhereUniqueInput } from "../trip/TripWhereUniqueInput";

export type NoteCreateInput = {
  content?: string | null;
  createdDate?: Date | null;
  trip?: TripWhereUniqueInput | null;
};
