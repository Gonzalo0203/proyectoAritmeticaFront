import React, { useReducer } from 'react';
import OpcionReducer from './opcionesReducer';
import OpcionContext from './opcionesContext';

import{
    MOSTRAR_OPCION_CAMBIOS,
    MOSTRAR_OPCION_PROGRESO,
    OCULTAR_OPCIONES
} from '../../types';

const OpcionState = props => {
    //State inicial de las actividades
    const initialState = {
        opcioncambio : false,
        opcionprogreso: false
    }

    //crear dispatch y state
    const [state, dispatch] = useReducer(OpcionReducer, initialState);

    const mostrarCambios = () => {
        dispatch({
            type: MOSTRAR_OPCION_CAMBIOS,
            payload: true
        })
    }

    const mostrarProgreso = () => {
        dispatch({
            type: MOSTRAR_OPCION_PROGRESO,
            payload: true
        })
    }

    const ocultarOpciones = () => {
        dispatch({
            type: OCULTAR_OPCIONES
        });
    }

    return (
        <OpcionContext.Provider
            value={{
                opcioncambio: state.opcioncambio,
                opcionprogreso : state.opcionprogreso,
                mostrarCambios,
                mostrarProgreso,
                ocultarOpciones
            }}
        >
            {props.children}
        </OpcionContext.Provider>
    )
}

export default OpcionState;