import { Location } from "../location/Location";
import { Note } from "../note/Note";
import { User } from "../user/User";

export type Trip = {
  createdAt: Date;
  description: string | null;
  destination: string | null;
  endDate: Date | null;
  id: string;
  locations?: Array<Location>;
  notes?: Array<Note>;
  startDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
