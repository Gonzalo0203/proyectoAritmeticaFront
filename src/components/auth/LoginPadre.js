import React, { useState, Fragment, useContext, useEffect } from 'react';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthTutorContext from '../../context/autenticacion/authTutorContext';
import { Link } from 'react-router-dom';
import imagen from '../../imagenes/aritmeticaLogin.png';

const LoginPadre = (props) => {

    //Extraer los valores del context de alertas
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    //Extraer los valores del context de Autenticación del Padre
    const authTutorContext = useContext(AuthTutorContext);
    const { mensajetutor, tutorautenticado, usuariotutor, ninotutor, iniciarSesionTutor, usuarioTutorAutenticado, ninoTutorAutenticado } = authTutorContext;

    //En caso de que la contraseña sea incorrecta o el usuario no exista
    useEffect(() => {
        //Se evalua si el usuario existe
        if(tutorautenticado) {
            props.history.push('/inicio-tutor');
            usuarioTutorAutenticado();
            ninoTutorAutenticado();
        }

        //En caso de que haya un mensaje se mostrará una alerta de error
        if(mensajetutor) {
            mostrarAlerta(mensajetutor.msg, mensajetutor.categoria);
        }

        

    // eslint-disable-next-line
  }, [mensajetutor, tutorautenticado, props.history, usuariotutor, ninotutor]);

    //State para iniciar sesión Padre
    const [usuario, guardarUsuario] = useState({
        emailPadre: '',
        passwordPadre: ''
    });

    //Extraer valores de Usuario
    const {emailPadre, passwordPadre} = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    //Inicio de sesión
    const onSubmit = e => {
        e.preventDefault();

        //Validación de campos vacios
        if(emailPadre.trim() === '' || passwordPadre.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }
        //Pasar al action los valores
        iniciarSesionTutor({emailPadre, passwordPadre});
    }

    return ( 
        <Fragment>
            <div className="form-usuario">
                {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> ): null}
                <img className="imagen" src={imagen} alt="Login" />
                <div className="contenedor-form sombra-dark">
                    <h1>Iniciar Sesión</h1>
                    <form
                        onSubmit={onSubmit}
                    >
                        <div className="campo-form">
                            <label htmlFor="emailPadre">Email</label>
                            <input 
                                type="email"
                                id="emailPadre"
                                name="emailPadre"
                                placeholder="Email"
                                value={emailPadre}
                                onChange={onChange}
                            />
                        </div>

                        <div className="campo-form">
                            <label htmlFor="passwordPadre">Contraseña</label>
                            <input 
                                type="password"
                                id="passwordPadre"
                                name="passwordPadre"
                                placeholder="Contraseña"
                                value={passwordPadre}
                                onChange={onChange}
                            />
                        </div>

                        <div className="campo-form">
                            <input 
                                type="submit"
                                className="btn btn-primario btn-block"
                                value="Iniciar Sesión"
                            />
                        </div>
                    </form>
                    <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                        Obtener Cuenta
                    </Link>
                    <Link to={'/'} className="enlace-cuenta">
                        Regresar al Inicio
                    </Link>
                </div>
            </div>
        </Fragment>
     );
}
 
export default LoginPadre;

