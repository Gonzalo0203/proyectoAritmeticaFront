import React, { Fragment, useState, useContext, useEffect } from 'react';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthTutorContext from '../../context/autenticacion/authTutorContext';
import { Link } from 'react-router-dom';
import '../../CSSFiles/nuevoLogin.css'

const NuevaCuentaDos = (props) => {

    //Extraer los valores del context de alertas
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    //Extraer los valores del context de Autenticación del Tutor
    const authTutorContext = useContext(AuthTutorContext);
    const { mensajetutor, tutorautenticado, registrarUsuarios } = authTutorContext;

    //En caso de que el usuario se haya autenticado o registrado o sea un registro duplicado
    useEffect(() => {
        //Primeramente se evalua si el usuario esta autenticado como true
        if(tutorautenticado) {
            props.history.push('/inicio-tutor');
        }

        //En caso de que haya un mensaje se mostrará una alerta de error
        if(mensajetutor){
            mostrarAlerta(mensajetutor.msg, mensajetutor.categoria);
        }
        // eslint-disable-next-line
    }, [mensajetutor, tutorautenticado, props.history])

    //State para crear cuentas del padre y del niño
    const [usuarioPadreNino, guardarUsuarioPadreNino] = useState({
        nombrePadre: '',
        emailPadre: '',
        passwordPadre: '',
        confirmarPadre: '',
        nombreNino: '',
        passwordNino: '',
        confirmarNino: ''
    });

    //Extraer valores para guardar al Padre y al Niño
    const {nombrePadre, emailPadre, passwordPadre, confirmarPadre, nombreNino, passwordNino, confirmarNino} = usuarioPadreNino;

    //Función para guardar los datos de registro
    const onChangeUno = e => {
        guardarUsuarioPadreNino({
            ...usuarioPadreNino,
            [e.target.name] : e.target.value
        })
    }

    //Función del Submit
    const onSubmitUno = e => {
        e.preventDefault();

        //Validación de campos vacios
        if(nombreNino.trim() === '' || passwordNino.trim() === '' || confirmarNino.trim() === '') {
            mostrarAlerta('Llena todos los campos para registrar las cuentas', 'alerta-error');
            return;
        }

        //Válidar que el password sea del al menos 4 carácteres
        if(passwordNino.length<4) {
            mostrarAlerta('La contraseña debe ser de al menos 4 carácteres', 'alerta-error');
            return;
        }

        //Validar que los password sean iguales
        if(passwordNino !== confirmarNino){
            mostrarAlerta('Las contraseñas no coinciden', 'alerta-error');
            return;
        }
        //Pasar al action los valores
        registrarUsuarios({
            nombrePadre,
            emailPadre,
            passwordPadre,
            nombreNino,
            passwordNino
        });
    }

    //State para el cambio de animación
    const [animaciones, cambiarAnimacion] = useState({
        isShowUno: 'is-showing',
        isShowDos: '',
        animInUno: '',
        animInDos: '',
        animOutUno: '',
        animOutDos: '',
        animUp: '',
        activeUno: 'is-active',
        activeDos: ''
    });

    //Se extraen los valores del state de la animación
    const {isShowUno, isShowDos, animInUno, animInDos, animOutUno, animOutDos, animUp, activeUno, activeDos} = animaciones;

    //Función para cambiar del panel de datos del padre al panel de datos del niño
    const cambiarAnimacionButton = () => {
        //Validación de campos vacios
        if(nombrePadre.trim() === '' || emailPadre.trim() === '' || passwordPadre.trim() === '' || confirmarPadre.trim() === '') {
            mostrarAlerta('Antes de continuar, llena todos los campos', 'alerta-error');
            return;
        }

        //Validar que el password sea del al menos 6 carácteres
        if(passwordPadre.length<6) {
            mostrarAlerta('La contraseña debe ser de al menos 6 carácteres', 'alerta-error');
            return;
        }

        //Validar que los password sean iguales
        if(passwordPadre !== confirmarPadre){
            mostrarAlerta('Las contraseñas no coinciden', 'alerta-error');
            return;
        }

        //Primero se mostrará la animación de salida del panel
        cambiarAnimacion({
            isShowUno: 'is-showing',
            animOutUno: "animate-out",
        });

        //Después de que el panel uno salga, se mostrará el cambio de panel y la animación de entrada
        setTimeout(() => {
            cambiarAnimacion({
                activeDos: "is-active",
                animInUno: "animate-in"
            });
          },600);
          //Después de la animación de entrada se mostrará el panel de datos niño
          setTimeout(() => {
            cambiarAnimacion({
                isShowDos: "is-showing",
                activeDos: "is-active",
            });
          },1200);
    }

    //Función para regresar al panel de datos padre
    const regresarStep = () => {
        //Se mostrará la animación de salida de datos del niño
        cambiarAnimacion({
            isShowDos: 'is-showing',
            animOutDos: "animate-out"
        });
        //Se mostrará el cambio de panel y la animación de entrada
        setTimeout(() => {
            cambiarAnimacion({
                activeUno: "is-active",
                animInDos: "animate-in"
            });
          },600);
          //Después de la animación de entrada se mostrará el panel de datos del padre
          setTimeout(() => {
            cambiarAnimacion({
                isShowUno: "is-showing",
                activeUno: "is-active",
            });
          },1200);
    }

    
    return (
        <Fragment>
        <div className={`modal-wrap ${animUp}`}>
        {alerta ? (<div className={`alerta ${alerta.categoria}`}><i class="far fa-surprise"></i> {alerta.msg} <i class="far fa-surprise"></i></div> ): null}
        <div className="modal-header"><span className={`${activeUno}`}></span><span className={`${activeDos}`}></span></div>
        <div className="modal-bodies">
            <div className={`modal-body modal-body-step-1 ${isShowUno} ${animOutUno} ${animInDos}`}>
            <h1>Obtener una Cuenta</h1>
            <div className="title">Datos del Tutor</div>
            <div className="description">Hola, aquí van los datos del Padre o Tutor</div>
            <form
                onSubmit={onSubmitUno}
            >
                <div className="campo-form">
                    <label htmlFor="nombrePadre">Usuario</label>
                    <input 
                        type="text"
                        id="nombrePadre"
                        name="nombrePadre"
                        placeholder="Nombre Usuario"
                        value={nombrePadre}
                        onChange={onChangeUno}
                    />
                </div>
                <div className="campo-form">
                    <label htmlFor="emailPadre">Email</label>
                    <input 
                        type="email"
                        id="emailPadre"
                        name="emailPadre"
                        placeholder="Email"
                        value={emailPadre}
                        onChange={onChangeUno}
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
                        onChange={onChangeUno}
                    />
                </div>
                <div className="campo-form">
                    <label htmlFor="confirmarPadre">Confirmar Contraseña</label>
                    <input 
                        type="password"
                        id="confirmarPadre"
                        name="confirmarPadre"
                        placeholder="Repite tu Contraseña"
                        value={confirmarPadre}
                        onChange={onChangeUno}
                    />
                </div>
                
                <div className="text-center">
                <Link to={'/login-padre'}>
                    <div className="buttones">
                            Regresar al Login
                    </div>
                </Link>
                <div 
                    className="buttones espacio-boton"
                    onClick={() => cambiarAnimacionButton()}
                >CONTINUAR</div>
                
                </div>
            </form>
            </div>
            <div className={`modal-body modal-body-step-2 ${isShowDos} ${animInUno} ${animOutDos}`}>
            <div className="title">Datos del Niño</div>
            <div className="description">Hola, aquí van los datos del Estudiante</div>
            <form
                onSubmit={onSubmitUno}
            >
                <div className="campo-form">
                    <label htmlFor="nombreNino">Usuario</label>
                    <input 
                        type="text"
                        id="nombreNino"
                        name="nombreNino"
                        title="Nombre de Usuario del Niño"
                        placeholder="Nombre Usuario Niño"
                        value={nombreNino}
                        onChange={onChangeUno}
                    />
                </div>
                <div className="campo-form">
                    <label htmlFor="passwordNino">Contraseña</label>
                    <input 
                        type="password"
                        id="passwordNino"
                        name="passwordNino"
                        title="Contraseña de al menos 4 carácteres"
                        placeholder="Contraseña mínimo de 4 carácteres"
                        value={passwordNino}
                        onChange={onChangeUno}
                    />
                </div>
                <div className="campo-form">
                    <label htmlFor="confirmarNino">Confirmar Contraseña</label>
                    <input 
                        type="password"
                        id="confirmarNino"
                        name="confirmarNino"
                        placeholder="Repite la Contraseña"
                        value={confirmarNino}
                        onChange={onChangeUno}
                    />
                </div>
                <div className="text-center fade-in">
                <div 
                    className="buttones"
                    onClick={() => regresarStep()}
                >Regresar</div>
                {/*<div className="buttones espacio-boton">Registrar</div>*/}
                <input 
                        type="submit"
                        className="btn-primario buttones espacio-boton"
                        value="Registrar"
                    />
                </div>
            </form>
            </div>
        </div>
        </div>
        </Fragment>
    );
}

export default NuevaCuentaDos;