import React, { useContext} from 'react';
import ActividadContext from '../../context/actividades/actividadContext';
import Pelota from '../../imagenes/pelota.png';
import Calculadora from '../../imagenes/calculadora.png';
import Pies from '../../imagenes/patas.png';
import Camara from '../../imagenes/camara.png';

const ListadoActividades = () => {

   const actividadContext = useContext(ActividadContext);
   const { mostrarVideo, mostrarEjemplo, mostrarPractica, mostrarJuego } = actividadContext;

    return ( 
        <ul className="listado-proyectos">
            <li>
               <button
                type="button"
                className="btn btn-blank"
                onClick={() => mostrarVideo()}
               ><img className="imagenMenuCam" src={Camara} alt="Camara"/>
               Aprende:<span className="estiloTexto"> Con videos</span></button> 
            </li>
            <li>
               <button
                type="button"
                className="btn btn-blank estiloMenuUno"
                onClick={() => mostrarEjemplo()}
               ><img className="imagenMenuPie" src={Pies} alt="Pies"/>
               Sigue:<span className="estiloTexto"> Los ejemplos</span></button> 
            </li>
            <li>
               <button
                type="button"
                className="btn btn-blank"
                onClick={() => mostrarPractica()}
               ><img className="imagenMenuCal" src={Calculadora} alt="Calculadora"/>
               Práctica:<span className="estiloTexto"> Con ejercicios</span></button> 
            </li>
            <li>
               <button
                type="button"
                className="btn btn-blank"
                onClick={() => mostrarJuego()}
               ><img className="imagenMenuPel" src={Pelota} alt="Pelota"/>
               Juega y Diviértete</button> 
            </li>
        </ul>
     );
}
 
export default ListadoActividades;