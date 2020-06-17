import React, { useReducer } from 'react';
import AuthTutorReducer from './authTutorReducer';
import AuthTutorContext from './authTutorContext';
import clienteAxios from '../../components/config/axios';
import tokenAuth from '../../components/config/tokenAuth';

import {
    REGISTRO_EXITOSO_PADRE,
    REGISTRO_ERROR_PADRE,
    OBTENER_USUARIO_PADRE,
    LOGIN_EXITOSO_PADRE,
    LOGIN_ERROR_PADRE,
    CERRAR_SESION_PADRE,
    OBTENER_NINO_TUTOR
} from '../../types/index';

const AuthTutorState = props => {
    //State inicial
    const initialState = {
        tokenTutor: localStorage.getItem('tokenTutor'),
        tutorautenticado: null,
        usuariotutor: null,
        mensajetutor: null,
        cargandotutor: true,
        ninotutor : null
    }

    const [state, dispatch] = useReducer(AuthTutorReducer, initialState);

    //Funciones para la autenticación
    //Retorna el usuario tutor autenticado
    const registrarUsuarios = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/usuarios', datos);
            console.log(respuesta);

            dispatch({
                type: REGISTRO_EXITOSO_PADRE,
                payload: respuesta.data
            });
            //Obtener el nombre del tutor
            usuarioTutorAutenticado();
            ninoTutorAutenticado();
        } catch (error) {
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: REGISTRO_ERROR_PADRE,
                payload: alerta
            });
        }
    }

    const usuarioTutorAutenticado = async () => {
        const tokenTutor = localStorage.getItem('tokenTutor');
        if(tokenTutor){
            tokenAuth(tokenTutor);
        }

        try {
            const respuesta = await clienteAxios.get('/api/authTutor');
            dispatch({
                type: OBTENER_USUARIO_PADRE,
                payload: respuesta.data.usuariotutor
            })
        } catch (error) {
            console.log(error.response);
            dispatch({
                type: LOGIN_ERROR_PADRE
            })
        }
    }

    const ninoTutorAutenticado = async () => {
        const tokenTutor = localStorage.getItem('tokenTutor');
        if(tokenTutor){
            tokenAuth(tokenTutor);
        }
        try {
            const respuesta = await clienteAxios.get('/api/authTutor/nino');
            console.log(respuesta)
            dispatch({
                type: OBTENER_NINO_TUTOR,
                payload: respuesta.data.ninoTutor
            })
        } catch (error) {
            console.log(error.response);
            dispatch({
                type: LOGIN_ERROR_PADRE
            })
        }
    }

    //Cuando el usuario inicia sesión
    const iniciarSesionTutor = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/authTutor', datos);
            dispatch({
                type: LOGIN_EXITOSO_PADRE,
                payload: respuesta.data
            });

            //Obtener el nombre del tutor
            usuarioTutorAutenticado();
            ninoTutorAutenticado();
        } catch (error) {
            console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: LOGIN_ERROR_PADRE,
                payload: alerta
            })
        }
    }

    //Cerrar sesión
    const cerrarSesionTutor = () => {
        dispatch({
            type: CERRAR_SESION_PADRE
        })
    }

    return (
        <AuthTutorContext.Provider
            value={{
                tokenTutor: state.tokenTutor,
                tutorautenticado: state.tutorautenticado,
                usuariotutor: state.usuariotutor,
                mensajetutor: state.mensajetutor,
                cargandotutor: state.cargandotutor,
                ninotutor: state.ninotutor,
                registrarUsuarios,
                usuarioTutorAutenticado,
                iniciarSesionTutor,
                cerrarSesionTutor,
                ninoTutorAutenticado
            }}
        >
            {props.children}
        </AuthTutorContext.Provider>
    )

}

export default AuthTutorState;