import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthNinoContext from '../../context/autenticacion/authNinoContext';

const RutaPrivadaNino = ({ component: Component, ...props }) => {
    //Context de la Ruta Privada del Niño
    const authNinoContext = useContext(AuthNinoContext);
    const {ninoautenticado, cargandonino, usuarioNinoAutenticado} = authNinoContext;

    useEffect(() => {
        usuarioNinoAutenticado();
        //eslint-disable-next-line
    }, []);

    return (
        <Route {...props} render = {props => !ninoautenticado && !cargandonino ? (
            <Redirect to="/login-nino" />
        ) : (
            <Component {...props} />
        )}
        />
    );
}

export default RutaPrivadaNino;