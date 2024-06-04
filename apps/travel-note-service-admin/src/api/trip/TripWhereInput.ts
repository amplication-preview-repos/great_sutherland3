import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LocationListRelationFilter } from "../location/LocationListRelationFilter";
import { NoteListRelationFilter } from "../note/NoteListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripWhereInput = {
  description?: StringNullableFilter;
  destination?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  locations?: LocationListRelationFilter;
  notes?: NoteListRelationFilter;
  startDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
