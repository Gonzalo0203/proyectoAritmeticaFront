import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthTutorContext from '../../context/autenticacion/authTutorContext';

const RutaPrivadaTutor = ({ component: Component, ...props }) => {
    //Context de la Ruta Privada del Niño
    const authTutorContext = useContext(AuthTutorContext);
    const {tutorautenticado, cargandotutor, usuarioTutorAutenticado} = authTutorContext;

    useEffect(() => {
        usuarioTutorAutenticado();
        //eslint-disable-next-line
    }, []);

    return (
        <Route {...props} render = {props => !tutorautenticado && !cargandotutor ? (
            <Redirect to="/login-padre" />
        ) : (
            <Component {...props} />
        )}
        />
    );
}

export default RutaPrivadaTutor;