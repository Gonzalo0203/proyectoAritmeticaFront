import {
    REGISTRO_EXITOSO_PADRE,
    REGISTRO_ERROR_PADRE,
    OBTENER_USUARIO_PADRE, 
    LOGIN_EXITOSO_PADRE,
    LOGIN_ERROR_PADRE,
    CERRAR_SESION_PADRE,
    OBTENER_NINO_TUTOR
} from '../../types/index';

export default (state, action) => {
    switch(action.type) {
        case REGISTRO_EXITOSO_PADRE:
        case LOGIN_EXITOSO_PADRE:
            localStorage.setItem('tokenTutor', action.payload.tokenTutor);
            return {
                ...state,
                tutorautenticado: true,
                mensajetutor: null,
                cargandotutor: false
            }
        
        case OBTENER_USUARIO_PADRE:
            return {
                ...state,
                tutorautenticado: true,
                usuariotutor: action.payload,
                cargandotutor: false
            }

            
        case OBTENER_NINO_TUTOR:
            return {
                ...state,
                tutorautenticado: true,
                ninotutor: action.payload,
                cargandotutor: false
            }

        case CERRAR_SESION_PADRE:
        case LOGIN_ERROR_PADRE:
        case REGISTRO_ERROR_PADRE:
            localStorage.removeItem('tokenTutor');
            return {
                ...state,
                tokenTutor: null,
                usuariotutor: null,
                tutorautenticado: null,
                mensajetutor: action.payload,
                cargandotutor: false,
                ninotutor: null
            }

        default:
            return state;
    }
}