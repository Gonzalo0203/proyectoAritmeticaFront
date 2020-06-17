import React, {Fragment} from 'react';
import '../../CSSFiles/listaActividades.css';

const Ejercicios = () => {

    const ejercicios = [
        {id: 1, nombre: 'Sumar con unidades'},
        {id: 2, nombre: 'Sumar con decenas'},
        {id: 3, nombre: 'Sumar con centenas'},
        {id: 4, nombre: 'Restar con unidades'},
        {id: 5, nombre: 'Restar con decenas'},
        {id: 6, nombre: 'Restar con centenas'},
        {id: 7, nombre: 'Multiplicar con unidades'},
        {id: 8, nombre: 'Multiplicar con decenas'},
        {id: 9, nombre: 'Multiplicar con centenas'},
        {id: 10, nombre: 'Dividir con unidades'},
        {id: 11, nombre: 'Dividir con decenas'},
        {id: 12, nombre: 'Dividir con centenas'}
    ];

    return ( 
        <Fragment>
            <h2 style={{color:"white"}}>Práctica: <span>Con Ejercicios</span></h2>
            <main className="mainCss mainClass">
                <ol className="gradient-list">
                    {ejercicios.map(ejercicio => (
                        <li 
                            key = {ejercicio.id.toString()}
                            className="tarea sombra">
                            <p>{ejercicio.nombre}</p>
                            <div className="estado">
                                <button
                                    type="button"
                                    className="completo"
                                    //onClick={() => cambiarEstado(tarea)}
                                >Ver Ejercicio</button>
                            </div>
                        </li>
                    ))}
            </ol>
            </main>
        </Fragment> 
     );
}
 
export default Ejercicios;
