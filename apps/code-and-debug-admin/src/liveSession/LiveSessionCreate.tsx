import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { InstructorTitle } from "../instructor/InstructorTitle";

export const LiveSessionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="instructor.id"
          reference="Instructor"
          label="Instructor"
        >
          <SelectInput optionText={InstructorTitle} />
        </ReferenceInput>
        <DateTimeInput label="ScheduledTime" source="scheduledTime" />
        <TextInput label="Title" source="title" />
        <TextInput label="ZoomLink" source="zoomLink" />
      </SimpleForm>
    </Create>
  );
};
