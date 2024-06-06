import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { INSTRUCTOR_TITLE_FIELD } from "../instructor/InstructorTitle";

export const LiveSessionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
