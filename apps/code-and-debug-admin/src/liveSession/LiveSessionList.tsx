import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { INSTRUCTOR_TITLE_FIELD } from "../instructor/InstructorTitle";

export const LiveSessionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LiveSessions"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
