import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { INSTRUCTOR_TITLE_FIELD } from "./InstructorTitle";

export const InstructorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Course"
          target="instructorId"
          label="Courses"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Instructor"
              source="instructor.id"
              reference="Instructor"
            >
              <TextField source={INSTRUCTOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Price" source="price" />
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="LiveSession"
          target="instructorId"
          label="LiveSessions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Instructor"
              source="instructor.id"
              reference="Instructor"
            >
              <TextField source={INSTRUCTOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ScheduledTime" source="scheduledTime" />
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="ZoomLink" source="zoomLink" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
