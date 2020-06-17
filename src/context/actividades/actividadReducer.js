import{
    MOSTRAR_ACTIVIDAD_VIDEOS,
    MOSTRAR_ACTIVIDAD_EJEMPLOS,
    MOSTRAR_ACTIVIDAD_PRACTICA,
    MOSTRAR_ACTIVIDAD_JUEGA,
    OCULTAR_ACTIVIDADES
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case MOSTRAR_ACTIVIDAD_VIDEOS:
            return {
                ...state,
                actividadvideos : action.payload,
                actividadejemplos : false,
                actividadpractica : false,
                actividadjuega : false
            }
        case MOSTRAR_ACTIVIDAD_EJEMPLOS:
            return {
                ...state,
                actividadvideos : false,
                actividadejemplos : action.payload,
                actividadpractica : false,
                actividadjuega : false
            }

        case MOSTRAR_ACTIVIDAD_PRACTICA:
            return {
                ...state,
                actividadvideos : false,
                actividadejemplos : false,
                actividadpractica : action.payload,
                actividadjuega : false
            }

        case MOSTRAR_ACTIVIDAD_JUEGA:
            return {
                ...state,
                actividadvideos : false,
                actividadejemplos : false,
                actividadpractica : false,
                actividadjuega : action.payload
            }

            case OCULTAR_ACTIVIDADES:
                return {
                    ...state,
                    actividadvideos : false,
                    actividadejemplos : false,
                    actividadpractica : false,
                    actividadjuega : false
                }

            default:
                return state;
    }
}