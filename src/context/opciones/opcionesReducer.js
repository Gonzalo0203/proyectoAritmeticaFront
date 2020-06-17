import{
    MOSTRAR_OPCION_CAMBIOS,
    MOSTRAR_OPCION_PROGRESO,
    OCULTAR_OPCIONES
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case MOSTRAR_OPCION_CAMBIOS:
            return {
                ...state,
                opcioncambio : action.payload,
                opcionprogreso : false
            }
        case MOSTRAR_OPCION_PROGRESO:
            return {
                ...state,
                opcioncambio : false,
                opcionprogreso : action.payload
            }   

            case OCULTAR_OPCIONES:
                return {
                    ...state,
                    opcioncambio : false,
                    opcionprogreso : false
                }

            default:
                return state;
    }
}