import { LocationCreateNestedManyWithoutTripsInput } from "./LocationCreateNestedManyWithoutTripsInput";
import { NoteCreateNestedManyWithoutTripsInput } from "./NoteCreateNestedManyWithoutTripsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripCreateInput = {
  description?: string | null;
  destination?: string | null;
  endDate?: Date | null;
  locations?: LocationCreateNestedManyWithoutTripsInput;
  notes?: NoteCreateNestedManyWithoutTripsInput;
  startDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
