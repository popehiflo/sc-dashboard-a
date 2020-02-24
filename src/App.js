// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "./users";

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
/* Componente personalizado, UserList */
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={ UserList } />
  </Admin>
);

export default App;

