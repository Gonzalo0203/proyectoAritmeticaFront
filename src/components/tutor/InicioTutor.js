import React, { useContext, useEffect } from 'react';
import BarraMenu from '../layouttutor/BarraMenu';
import Sidebar from '../layouttutor/Sidebar';
import OpcionesContext from '../../context/opciones/opcionesContext';
import AuthTutorContext from '../../context/autenticacion/authTutorContext';
import Progreso from './Progreso';
import Configuracion from './Configuracion'

const InicioTutor = () => {

    //Extraer la información de autenticación
    const authTutorContext = useContext(AuthTutorContext);
    const { usuarioTutorAutenticado } = authTutorContext;

    useEffect(() => {
        usuarioTutorAutenticado();
        // eslint-disable-next-line
    }, []);

    const opcionContext = useContext(OpcionesContext);
    const {opcioncambio, opcionprogreso} = opcionContext;

    let opcionVacio = false;
    let opcion = '';

    if(opcioncambio === false && opcionprogreso === false) {
        opcionVacio = true
     }else if(opcioncambio){
        opcion=<Configuracion />;
     }else if(opcionprogreso){
        opcion = <Progreso />;
     }

    return ( 
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <BarraMenu />
                <main>
                    
                    <div className="contenedor-tareas">
                        {opcionVacio ? <h2 style={{color: "white"}}>Selecciona una opción</h2> : 
                            opcion
                        }
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default InicioTutor;