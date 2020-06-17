import React, { useReducer } from 'react';
import alertaReducer from './alertaReducer';
import alertaContext from './alertaContext';

import {MOSTRAR_ALERTA, OCULTAR_ALERTA} from '../../types/index';

const AlertaState = props => {
    //State incial de las alertas
    const initialState = {
        alerta: null
    }

    const [state, dispatch] = useReducer(alertaReducer, initialState);

    //Funciones
    const mostrarAlerta = (msg, categoria) => {
    dispatch({
        type: MOSTRAR_ALERTA,
        payload: {
            msg,
            categoria
        }
    });

    //Después de 4 segundos se quitará la alerta de la pantalla
    setTimeout(() => {
        dispatch({
            type: OCULTAR_ALERTA                
        })
    }, 4000);

    }

    return (
        <alertaContext.Provider
            value = {{
                alerta: state.alerta,
                mostrarAlerta
            }}
        >
            {props.children}
        </alertaContext.Provider>
    )
}

export default AlertaState;