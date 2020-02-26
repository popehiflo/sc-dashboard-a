// in src/users.js
import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import MyUrlField from './MyUrlField';

export const UserList = props => (
    /*List es el componente responsable de obtener la informacion 
    de la API, mostrar el titulo de la pagina y manejar la paginacion*/
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <MyUrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);