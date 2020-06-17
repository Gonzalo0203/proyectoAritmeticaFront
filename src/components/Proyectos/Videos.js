import React, {Fragment} from 'react';
import '../../CSSFiles/listaActividades.css';

const Videos = () => {

    const videos = [
        {id: 1, nombre: 'Introducción a la aritmética'},
        {id: 2, nombre: 'Concepto de unidad y números'},
        {id: 3, nombre: 'Concepto de decena'},
        {id: 4, nombre: 'Concepto de centena'},
        {id: 5, nombre: 'Concepto de suma'},
        {id: 6, nombre: 'Concepto de resta'},
        {id: 7, nombre: 'Concepto de multiplicación'},
        {id: 8, nombre: 'Concepto de división'},
        {id: 9, nombre: 'Ejemplos de sumar'},
        {id: 10, nombre: 'Ejemplos de restar'},
        {id: 11, nombre: 'Ejemplos de multiplicar'},
        {id: 12, nombre: 'Ejemplos de dividir'}
    ];

    return ( 
        <Fragment>
            <h2 style={{color:"white"}}>Aprende: <span>Con Videos</span></h2>
            <main className="mainCss mainClass">
                <ol className="gradient-list">
                    {videos.map(video => (
                        <li 
                            key = {video.id.toString()}
                            className="tarea sombra">
                            <p>{video.nombre}</p>
                            <div className="estado">
                                <button
                                    type="button"
                                    className="completo"
                                    //onClick={() => cambiarEstado(tarea)}
                                >Ver Video</button>
                            </div>
                        </li>
                    ))}
            </ol>
            </main>
        </Fragment>
     );
}
 
export default Videos;
