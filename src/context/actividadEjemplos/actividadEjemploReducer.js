import {
    SELECCIONAR_EJEMPLO,
    MOSTRAR_EJEMPLO,
    OCULTAR_EJEMPLO
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case SELECCIONAR_EJEMPLO:
            return {
                ...state,
                ejemploseleccionado:  action.payload
            }

        case MOSTRAR_EJEMPLO:
            return {
                ...state,
                mostrarejemplo: action.payload
            }

        case OCULTAR_EJEMPLO:
            return {
                ...state,
                mostrarejemplo: action.payload
            }


        default:
            return state;
    }
}