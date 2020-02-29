import React from 'react';
import { List, Edit, Create,
        Filter,
        Datagrid, 
        TextField, 
        ReferenceField,
        EditButton,
        ReferenceInput,
        TextInput,
        SelectInput,
        SimpleForm,
         } from 'react-admin';

/* "motor de busqueda" de criterios multiples */
const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Buscar Titulo" source="q" alwaysOn />
        <ReferenceInput label="Usuario" source="userId" reference="users" allowEmpty >
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);
         
/* Listar los post que llegan desde la API */     
export const PostList = props => (
    <List filters={<PostFilter />} {...props}>
        {/*cambiamos esto <Datagrid rowClick="edit"> por un boton de accion explicita
            lineas mas abajo */}
        <Datagrid>
            <TextField source="id" />
            <ReferenceField label="Usuario" source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField label="Incidencia" source="title" />
            <EditButton />
        </Datagrid>
    </List>
);

/* Cambiar el titulo mostrado al editar un post */
const PostTitle = ({ record }) => {
    return <span>Post - {record ? `"${record.title}"` : ''}</span>;
};

/* Editar un post */
/* El componente <Edit> es responsable de buscar el registro
    y mostrar el titulo de la pagina, pasa el registro al componente
    <SimpleForm> que es el responsable del disenio del formulario  */
export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
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