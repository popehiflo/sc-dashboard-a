// in src/App.js
import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
/* El componente <Admin> espera uno o mas componentes hijos <Resource>,
   cada resource mapea un nombre a un endpoint en al API */
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="albums" list={ListGuesser} />
  </Admin>
);

export default App;

