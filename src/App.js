// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
/* Componente personalizado, UserList */
const App = () => (
  <Admin dataProvider={dataProvider}>
    {/*Usando los nuevos componentes PostEdit y PostCreate, se agregan como atributos */}
    <Resource name="posts" list={ PostList } edit={ PostEdit } create={ PostCreate } />
    <Resource name="users" list={ UserList } />
  </Admin>
);

export default App;

