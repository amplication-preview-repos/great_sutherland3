import { LocationUpdateManyWithoutTripsInput } from "./LocationUpdateManyWithoutTripsInput";
import { NoteUpdateManyWithoutTripsInput } from "./NoteUpdateManyWithoutTripsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripUpdateInput = {
  description?: string | null;
  destination?: string | null;
  endDate?: Date | null;
  locations?: LocationUpdateManyWithoutTripsInput;
  notes?: NoteUpdateManyWithoutTripsInput;
  startDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
