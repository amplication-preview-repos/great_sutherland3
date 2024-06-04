import { TripWhereUniqueInput } from "../trip/TripWhereUniqueInput";

export type LocationUpdateInput = {
  latitude?: number | null;
  longitude?: number | null;
  name?: string | null;
  trip?: TripWhereUniqueInput | null;
};
