import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TripWhereUniqueInput } from "../trip/TripWhereUniqueInput";

export type NoteWhereInput = {
  content?: StringNullableFilter;
  createdDate?: DateTimeNullableFilter;
  id?: StringFilter;
  trip?: TripWhereUniqueInput;
};
