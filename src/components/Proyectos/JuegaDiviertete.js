import React, {Fragment} from 'react';
import '../../CSSFiles/listaActividades.css';

const JuegaDiviertete = () => {

    const juegos = [
        {id: 1, nombre: 'Sumas'},
        {id: 2, nombre: 'Restas'},
        {id: 3, nombre: 'Sumas y Restas I'},
        {id: 4, nombre: 'Sumas y Restas II'},
        {id: 5, nombre: 'Multiplicaciones'},
        {id: 6, nombre: 'Divisiones'},
        {id: 7, nombre: 'Multiplicaciones y Divisiones I'},
        {id: 8, nombre: 'Multiplicaciones y Divisiones II'},
        {id: 9, nombre: 'Sumas, Restas, Multiplicaciones y Divisiones I'},
        {id: 10, nombre: 'Sumas, Restas, Multiplicaciones y Divisiones II'},
        {id: 11, nombre: 'Sumas, Restas, Multiplicaciones y Divisiones III'},
        {id: 12, nombre: 'Sumas, Restas, Multiplicaciones y Divisiones IV'}
    ];

    return ( 
        <Fragment>
            <h2 style={{color:"white"}}>Juega y Diviértete: <span>Con Crucigramas Numéricos</span></h2>
            <main className="mainCss mainClass">
                <ol className="gradient-list">
                    {juegos.map(juego => (
                        <li 
                            key = {juego.id.toString()}
                            className="tarea sombra">
                            <p>{juego.nombre}</p>
                            <div className="estado">
                                <button
                                    type="button"
                                    className="completo"
                                    //onClick={() => cambiarEstado(tarea)}
                                >Juega</button>
                            </div>
                        </li>
                    ))}
            </ol>
            </main>
        </Fragment> 
     );
}
 
export default JuegaDiviertete;