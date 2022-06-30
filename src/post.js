import * as React from "react";
import {
  Edit,
  Create,
  SimpleForm,
  TextInput,
  required,
  List,
  Datagrid,
  TextField,
  EditButton
} from "react-admin";
//import RichTextInput from "ra-input-rich-text";

export const PostEdit = () => (
  <Edit title="Edit post">
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" validate={[required()]} fullWidth />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);

export const PostCreate = () => (
  <Create title="Create post">
    <SimpleForm>
      <TextInput source="title" validate={[required()]} fullWidth />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);

export const PostList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="body" />
      <EditButton />
    </Datagrid>
  </List>
);
