// in src/App.js
import React from 'react';
import { Admin } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
/* El componente admin es el componente raiz, este espera un prop dataProvider
   que es capaz de recuperar (fetching) datos de una API */
const App = () => <Admin dataProvider={dataProvider} />;

export default App;

