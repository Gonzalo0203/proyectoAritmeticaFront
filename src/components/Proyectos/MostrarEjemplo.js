import React, {useContext} from 'react';
import BarraMenu from '../layout/BarraMenu';
import Sidebar from '../layout/Sidebar';
import actividadEjemplosContext from '../../context/actividadEjemplos/actividadEjemploContext';

import SistemaNumerico from './EjemplosVistas/SistemaNumerico';

const MostrarEjemplo = () => {

    const actividadEjemplo = useContext(actividadEjemplosContext);
    const {mostrarejemplo} = actividadEjemplo;
    

    return ( 
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <BarraMenu />
                <main>
                    
                    <div className="contenedor-tareas">
                        {mostrarejemplo && 
                            <SistemaNumerico />
                        }
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default MostrarEjemplo;