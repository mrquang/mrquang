import * as React from "react";
import { render } from "react-dom";
import { Admin, Resource } from "react-admin";
//import restProvider from "ra-data-simple-rest";
import jsonServerProvider from "ra-data-json-server";

import { PostList, PostEdit, PostCreate } from "./post";

render(
  <Admin
    dataProvider={jsonServerProvider("https://jsonplaceholder.typicode.com")}
  >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    />
  </Admin>,
  document.getElementById("root")
);
