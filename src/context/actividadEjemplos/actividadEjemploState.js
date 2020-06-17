import React, { useReducer } from 'react';
import actividadEjemploReducer from './actividadEjemploReducer';
import actividadEjemploContext from './actividadEjemploContext';

import {
    SELECCIONAR_EJEMPLO,
    MOSTRAR_EJEMPLO,
    OCULTAR_EJEMPLO
} from '../../types';

const ActividadEjemploState = props => {
    const initialState = {
        ejemploseleccionado: null,
        mostrarejemplo: false
    }

    //crear dispatch y state
    const [state, dispatch] = useReducer(actividadEjemploReducer, initialState);

    //Mostrar ejemplo seleccionado
    const seleccionarActividadEjemplo = ejemploId => {
        dispatch({
            type: SELECCIONAR_EJEMPLO,
            payload: ejemploId
        })
    }

    //Mostrar ejemplo seleccionado
    const mostrarActividadEjemplo = () => {
        dispatch({
            type: MOSTRAR_EJEMPLO,
            payload: true
        })
    }

    //Ocultar ejemplo seleccionado
    const ocultarActividadEjemplo = () => {
        dispatch({
            type: OCULTAR_EJEMPLO,
            payload: false
        })
    }

    return(
        <actividadEjemploContext.Provider
            value={{
                ejemploseleccionado: state.ejemploseleccionado,
                mostrarejemplo: state.mostrarejemplo,
                seleccionarActividadEjemplo,
                mostrarActividadEjemplo,
                ocultarActividadEjemplo
            }}
        >
            {props.children}
        </actividadEjemploContext.Provider>
    )
}

export default ActividadEjemploState;