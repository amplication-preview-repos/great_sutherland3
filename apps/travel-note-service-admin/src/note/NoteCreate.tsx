import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TripTitle } from "../trip/TripTitle";

export const NoteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="createdDate" source="createdDate" />
        <ReferenceInput source="trip.id" reference="Trip" label="trip">
          <SelectInput optionText={TripTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
