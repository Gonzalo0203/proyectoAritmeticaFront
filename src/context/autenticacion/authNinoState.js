import React, { useReducer } from 'react';
import AuthNinoReducer from './authNinoReducer';
import AuthNinoContext from './authNinoContext';
import clienteAxios from '../../components/config/axios';
import tokenAuth from '../../components/config/tokenAuth';

import {
    OBTENER_USUARIO_NINO,
    LOGIN_EXITOSO_NINO,
    LOGIN_ERROR_NINO,
    CERRAR_SESION_NINO
    }from '../../types/index';

const AuthNinoState = props => {
    
    //State inicial
    const initialState = {
        tokenNino: localStorage.getItem('tokenNino'),
        ninoautenticado: null,
        usuarionino: null,
        mensajenino: null,
        cargandonino: true
    }

    const [state, dispatch] = useReducer(AuthNinoReducer, initialState);

    //Funciones para la autenticación
    //Retorna el usuario infante autenticado
    const usuarioNinoAutenticado = async () => {
        const tokenNino = localStorage.getItem('tokenNino');
        if(tokenNino){
            tokenAuth(tokenNino);
        }

        try {
            const respuesta = await clienteAxios.get('/api/authNino');
            dispatch({
                type: OBTENER_USUARIO_NINO,
                payload: respuesta.data.usuarionino
            })
        } catch (error) {
            console.log(error.response);
            dispatch({
                type: LOGIN_ERROR_NINO
            })
        }
    }

    //Cuando el usuario inicia sesión
    const iniciarSesionNino = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/authNino', datos);
            dispatch({
                type: LOGIN_EXITOSO_NINO,
                payload: respuesta.data
            });

            //Obtener el usuario
            usuarioNinoAutenticado();
        } catch (error) {
            console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: LOGIN_ERROR_NINO,
                payload: alerta
            })
        }
    }

    //Cerrar sesión
    const cerrarSesionNino = () => {
        dispatch({
            type: CERRAR_SESION_NINO
        })
    }

    return (
        <AuthNinoContext.Provider
            value = {{
                tokenNino : state.tokenNino,
                ninoautenticado : state.ninoautenticado,
                usuarionino : state.usuarionino,
                mensajenino : state.mensajenino,
                cargandonino : state.cargandonino,
                iniciarSesionNino,
                usuarioNinoAutenticado,
                cerrarSesionNino
            }}
        >
            {props.children}
        </AuthNinoContext.Provider>
    )
}

export default AuthNinoState;