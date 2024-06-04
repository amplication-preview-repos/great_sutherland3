import { Trip } from "../trip/Trip";

export type Location = {
  createdAt: Date;
  id: string;
  latitude: number | null;
  longitude: number | null;
  name: string | null;
  trip?: Trip | null;
  updatedAt: Date;
};
