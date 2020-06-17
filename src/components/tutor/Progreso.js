import React, {useEffect, useContext} from 'react';
import AuthTutorContext from '../../context/autenticacion/authTutorContext';

const Progreso = () => {

    //Extraer la información de autenticación
    const authTutorContext = useContext(AuthTutorContext);
    const { ninotutor, ninoTutorAutenticado} = authTutorContext;

    useEffect(() => {
        ninoTutorAutenticado();
        // eslint-disable-next-line
    }, []);
    
    return ( 
        <>
            <h2 style={{color: "white"}}>PROGRESO DE: <span>{ninotutor.usr}</span></h2>
        </>
     );
}
 
export default Progreso;