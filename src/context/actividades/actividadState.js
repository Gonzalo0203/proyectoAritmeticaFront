import React, { useReducer } from 'react';
import actividadReducer from './actividadReducer';
import actividadContext from './actividadContext';

import{
    MOSTRAR_ACTIVIDAD_VIDEOS,
    MOSTRAR_ACTIVIDAD_EJEMPLOS,
    MOSTRAR_ACTIVIDAD_PRACTICA,
    MOSTRAR_ACTIVIDAD_JUEGA,
    OCULTAR_ACTIVIDADES
} from '../../types';

const ActividadState = props => {
    //State inicial de las actividades
    const initialState = {
        actividadvideos : false,
        actividadejemplos: false,
        actividadpractica: false,
        actividadjuega: false,
        actividadmostrar : false
    }

    //crear dispatch y state
    const [state, dispatch] = useReducer(actividadReducer, initialState);

    const mostrarVideo = () => {
        dispatch({
            type: MOSTRAR_ACTIVIDAD_VIDEOS,
            payload: true
        })
    }

    const mostrarEjemplo = () => {
        dispatch({
            type: MOSTRAR_ACTIVIDAD_EJEMPLOS,
            payload: true
        })
    }

    const mostrarPractica = () => {
        dispatch({
            type: MOSTRAR_ACTIVIDAD_PRACTICA,
            payload: true
        })
    }

    const mostrarJuego = () => {
        dispatch({
            type: MOSTRAR_ACTIVIDAD_JUEGA,
            payload: true
        })
    }

    const ocultarActividad = () => {
        dispatch({
            type: OCULTAR_ACTIVIDADES
        })
    }

    return (
        <actividadContext.Provider
            value={{
                actividadvideos: state.actividadvideos,
                actividadejemplos : state.actividadejemplos,
                actividadpractica : state.actividadpractica,
                actividadjuega : state.actividadjuega,
                actividadmostrar : state.actividadmostrar,
                mostrarVideo,
                mostrarEjemplo,
                mostrarPractica,
                mostrarJuego,
                ocultarActividad
            }}
        >
            {props.children}
        </actividadContext.Provider>
    )
}

export default ActividadState;