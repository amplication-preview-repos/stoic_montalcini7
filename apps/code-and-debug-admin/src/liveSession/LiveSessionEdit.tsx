import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { InstructorTitle } from "../instructor/InstructorTitle";

export const LiveSessionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
