import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider';
import Dashboard from './Dashboard';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
/* Componente personalizado, UserList */
const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    {/*Usando los nuevos componentes PostEdit y PostCreate, se agregan como atributos */}
    <Resource icon={UserIcon} name="users" list={ UserList } options={{label:'Usuarios'}} />
    <Resource icon={PostIcon} name="posts" list={ PostList } edit={ PostEdit } create={ PostCreate } options={{label:'Incidencias'}} />
    
    <Resource name="AAA" />
  </Admin>
);

export default App;

