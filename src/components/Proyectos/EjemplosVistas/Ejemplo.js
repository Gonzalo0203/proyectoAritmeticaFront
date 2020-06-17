import React, {useContext} from 'react';
import BarraMenu from '../../layout/BarraMenu';
import Sidebar from '../../layout/Sidebar';
import Ejemplos from '../Ejemplos';
import Videos from '../Videos';
import Ejercicios from '../Ejercicios';
import JuegaDiviertete from '../JuegaDiviertete';
import ActividadContext from '../../../context/actividades/actividadContext';
import { Link } from 'react-router-dom';

const Ejemplo = () => {

    const actividadContext = useContext(ActividadContext);
    const {actividadvideos, actividadejemplos, actividadpractica, actividadjuega} = actividadContext;

    let actividadVacio = false;
    let actividad = '';

    if(actividadvideos === false && actividadejemplos === false && actividadpractica === false && actividadjuega === false) {
       actividadVacio = true
    }else if(actividadvideos){
        actividad=<Videos />;
    }else if(actividadejemplos){
        actividad = <Ejemplos />;
    }else if(actividadpractica){
        actividad= <Ejercicios />;
    }else if(actividadjuega){
        actividad= <JuegaDiviertete />
    }

    return ( 
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <BarraMenu />
                <main>
                    <div className="contenedor-tareas">
                    {actividadVacio ? <h2 style={{color: "white"}}>Selecciona una actividad</h2> : 
                            actividad
                        }
                    </div>
                    <Link to={'/proyectos-nino'} className="enlace-cuenta">
                            Regresar
                        </Link>
                </main>
            </div>
        </div>
     );
}
 
export default Ejemplo;