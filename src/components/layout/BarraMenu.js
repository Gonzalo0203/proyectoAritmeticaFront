import React, { useContext, useEffect } from 'react';
import AuthNinoContext from '../../context/autenticacion/authNinoContext';
import ActividadContext from '../../context/actividades/actividadContext';

const BarraMenu = () => {

    //Extraer la información de autenticación
    const authNinoContext = useContext(AuthNinoContext);
    const { usuarionino, usuarioNinoAutenticado, cerrarSesionNino } = authNinoContext;

    //Extraer la información de las actividades
    const actividadContext = useContext(ActividadContext);
    const {ocultarActividad} = actividadContext;

    useEffect(() => {
        usuarioNinoAutenticado();
        // eslint-disable-next-line
    }, []);

    return ( 
        <header className="app-headerDos">
        {usuarionino ? <p className="nombre-usuario">Hola <span>{usuarionino}</span></p> : null}
        <nav className="nav-principal">
            <button
                className="btn btn-blank cerrar-sesion"
                onClick={() => {cerrarSesionNino(); ocultarActividad()}}
            >Cerrar Sesión</button>
        </nav>
    </header>
     );
}
 
export default BarraMenu;