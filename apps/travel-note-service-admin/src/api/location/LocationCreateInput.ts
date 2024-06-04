import { TripWhereUniqueInput } from "../trip/TripWhereUniqueInput";

export type LocationCreateInput = {
  latitude?: number | null;
  longitude?: number | null;
  name?: string | null;
  trip?: TripWhereUniqueInput | null;
};
