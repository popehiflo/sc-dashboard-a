// in src/posts.js
import React from 'react';
import { List, Edit, Create,
        Datagrid, 
        TextField, 
        ReferenceField,
        EditButton,
        ReferenceInput,
        TextInput,
        SelectInput,
        SimpleForm,
         } from 'react-admin';


/* Listar los post que llegan desde la API */     
export const PostList = props => (
    <List {...props}>
        {/*cambiamos esto <Datagrid rowClick="edit"> por un boton de accion explicita
            lineas mas abajo */}
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            {/*Este campo body deberia aparecer en el DataGrid, sino en una vista detallada*/}
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List>
);

/* Editar un post */
export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
               <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

/* Crear un nuevo post */
export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
               <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);