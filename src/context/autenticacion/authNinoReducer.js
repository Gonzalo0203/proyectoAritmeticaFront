import {
    OBTENER_USUARIO_NINO,
    LOGIN_EXITOSO_NINO,
    LOGIN_ERROR_NINO,
    CERRAR_SESION_NINO
} from '../../types/index';

export default (state, action) => {
    switch(action.type) {
        case LOGIN_EXITOSO_NINO:
            localStorage.setItem('tokenNino', action.payload.tokenNino);
            return {
                ...state,
                ninoautenticado : true,
                mensajenino : null,
                cargandonino : false
            }

        case OBTENER_USUARIO_NINO:
            return {
                ...state,
                ninoautenticado : true,
                usuarionino : action.payload,
                cargandonino : false
            }

            case CERRAR_SESION_NINO:
            case LOGIN_ERROR_NINO:
                localStorage.removeItem('tokenNino');
                return {
                    ...state,
                    tokenNino : null,
                    usuarionino : null,
                    ninoautenticado : null,
                    mensajenino : action.payload,
                    cargandonino : false
                }

        default:
            return state;
    }
}