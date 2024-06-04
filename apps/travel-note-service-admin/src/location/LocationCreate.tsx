import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TripTitle } from "../trip/TripTitle";

export const LocationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="latitude" source="latitude" />
        <NumberInput label="longitude" source="longitude" />
        <TextInput label="name" source="name" />
        <ReferenceInput source="trip.id" reference="Trip" label="trip">
          <SelectInput optionText={TripTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
