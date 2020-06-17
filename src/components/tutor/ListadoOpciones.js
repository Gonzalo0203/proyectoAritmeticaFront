import React, { useContext} from 'react';
import OpcionesContext from '../../context/opciones/opcionesContext';
import Usuarios from '../../imagenes/usuarios.png';
import Progreso from '../../imagenes/progreso.png';

const ListadoOpciones = () => {

    //Context de las opciones del tutor
    const opcionesContext = useContext(OpcionesContext);
    const { mostrarCambios, mostrarProgreso } = opcionesContext;

    return ( 
        <ul className="listado-proyectos">
            <li>
               <button
                type="button"
                className="btn btn-blank estiloMenuOp"
                onClick={() => mostrarCambios()}
               ><img className="imagenUsuarios" src={Usuarios} alt="Usuarios"/>
               Configuración de<span className="estiloTexto"> Usuarios</span></button> 
            </li>
            <li>
               <button
                type="button"
                className="btn btn-blank estiloMenuOp"
                onClick={() => mostrarProgreso()}
               ><img className="imagenProgreso" src={Progreso} alt="Progreso"/>
               Ver el progreso <span className="estiloTexto">de tu Niño</span></button> 
            </li>
        </ul>
     );
}
 
export default ListadoOpciones;