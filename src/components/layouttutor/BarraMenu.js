import React, { useContext, useEffect } from 'react';
import AuthTutorContext from '../../context/autenticacion/authTutorContext';
import OpcionesContext from '../../context/opciones/opcionesContext';

const BarraMenu = () => {

    //Extraer la información de autenticación
    const authTutorContext = useContext(AuthTutorContext);
    const { usuariotutor, usuarioTutorAutenticado, cerrarSesionTutor,  ninoTutorAutenticado} = authTutorContext;

    //Extraer la información de las opciones
    const opcionesContext = useContext(OpcionesContext);
    const {ocultarOpciones} = opcionesContext;

    useEffect(() => {
        usuarioTutorAutenticado();
        ninoTutorAutenticado();
        // eslint-disable-next-line
    }, []);

    return ( 
        <header className="app-headerDos">
        {usuariotutor ? <p className="nombre-usuario">Hola <span>{usuariotutor.usr}</span></p> : null}
        <nav className="nav-principal">
            <button
                className="btn btn-blank cerrar-sesion"
                onClick={() => {cerrarSesionTutor(); ocultarOpciones()}}
            >Cerrar Sesión</button>
        </nav>
    </header>
     );
}
 
export default BarraMenu;