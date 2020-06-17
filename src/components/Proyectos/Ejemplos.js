import React, {Fragment, useContext} from 'react';
import actividadEjemplosContext from '../../context/actividadEjemplos/actividadEjemploContext';
import '../../CSSFiles/listaActividades.css';

const Ejemplos = () => {

    const ejemplos = [
        {id: 1, nombre: 'Sistema Numérico Decimal'},
        {id: 2, nombre: 'Sumar con unidades'},
        {id: 3, nombre: 'Sumar con decenas'},
        {id: 4, nombre: 'Sumar con centenas'},
        {id: 5, nombre: 'Restar con unidades'},
        {id: 6, nombre: 'Restar con decenas'},
        {id: 7, nombre: 'Restar con centenas'},
        {id: 8, nombre: 'Multiplicar con unidades'},
        {id: 9, nombre: 'Multiplicar con decenas'},
        {id: 10, nombre: 'Multiplicar con centenas'},
        {id: 11, nombre: 'Dividir con unidades'},
        {id: 12, nombre: 'Dividir con decenas'},
        {id: 13, nombre: 'Dividir con centenas'}
    ];

    const actividadEjemplo = useContext(actividadEjemplosContext);
    const {seleccionarActividadEjemplo} = actividadEjemplo;

    return ( 
        <Fragment>
            <h2 style={{color:"white"}}>Sigue: <span>Los ejemplos</span></h2>
            <main className="mainCss mainClass">
                <ol className="gradient-list">
                    {ejemplos.map(ejemplo => (
                        <li 
                            key = {ejemplo.id.toString()}
                            className="tarea sombra">
                            <p>{ejemplo.nombre}</p>
                            <div className="estado">
                                <button
                                    type="button"
                                    className="completo"
                                    onClick={() => seleccionarActividadEjemplo(ejemplo.id)}
                                >Ver Ejemplo</button>
                            </div>
                        </li>
                    ))}
            </ol>
            </main>
        </Fragment> 
     );
}
 
export default Ejemplos;
