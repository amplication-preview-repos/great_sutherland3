import { Trip } from "../trip/Trip";

export type Note = {
  content: string | null;
  createdAt: Date;
  createdDate: Date | null;
  id: string;
  trip?: Trip | null;
  updatedAt: Date;
};
