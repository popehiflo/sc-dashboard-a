/*  Devido a que no tengo aun la API de auntenticacion, utilizare una autenticacion falsa
    que acepte todas las solicitudes de inicio de inicio de sesion y almacene el 'username'
    en localStorage. Cada camcio de pagina requerira que localStorage contenga un item 'username'
*/

/* Estos 5 metodos expuestos, cada uno devuelve una promesa */

export default {
    // Llamado cuando el usuario intenta iniciar sesion (log in)
    login: ({ username }) => {
        localStorage.setItem('username', username);
        // aceptar todas las combinaciones username/password
        return Promise.resolve();
    },
    // Llamado cuando el usuario da clic en el boton cerrar sesion (logout)
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    // Llamado cuando la API devuelve un error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // Llamado cuando el usuario navega a una nueva ubicacion,
    // para verificar la autenticacion
    checkAuth: () => {
        
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    },
    // Llamado cuando el usuario navega a una nueva ubicación, 
    // para verificar permisos/roles
    getPermissions: () => {
        return Promise.resolve();
    }
};