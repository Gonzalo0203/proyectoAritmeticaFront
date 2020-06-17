import React, {useContext} from 'react';
import actividadEjemplosContext from '../../context/actividadEjemplos/actividadEjemploContext';

const SistemaNumerico = () => {

    const sistemaNumerico = {id: 1, idEjemplo: 1, nombre: 'Sistema Numérico Decimal'};

    const actividadEjemplo = useContext(actividadEjemplosContext);
    const {ejemploseleccionado} = actividadEjemplo;

    
    


    return (
        <h1>{sistemaNumerico.nombre}</h1>
     );
}
 
export default SistemaNumerico;