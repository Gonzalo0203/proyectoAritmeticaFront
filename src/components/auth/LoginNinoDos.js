import React, { useState, useContext, useEffect } from "react";
import anime from "animejs";
import AlertaContext from '../../context/alertas/alertaContext';
import AuthNinoContext from '../../context/autenticacion/authNinoContext';
import imagenKid from "../../imagenes/mathkidsthree.png";
import { Link } from "react-router-dom";
import "../../CSSFiles/loginNino.css";

const LoginNinoDos = (props) => {
  /*Función para el efecto del input del usuario*/
  var current = null;
  const animacionEmail = () => {
    if (current) current.pause();
    current = anime({
      targets: "path",
      strokeDashoffset: {
        value: 0,
        duration: 700,
        easing: "easeOutQuart",
      },
      strokeDasharray: {
        value: "240 1386",
        duration: 700,
        easing: "easeOutQuart",
      },
    });
  };
  /*Función para el efecto del input de la contraseña*/
  const animacionPassword = () => {
    if (current) current.pause();
    current = anime({
      targets: "path",
      strokeDashoffset: {
        value: -336,
        duration: 700,
        easing: "easeOutQuart",
      },
      strokeDasharray: {
        value: "240 1386",
        duration: 700,
        easing: "easeOutQuart",
      },
    });
  };
  /*Función para el efecto del botón de submit*/
  const animacionSubmit = () => {
    if (current) current.pause();
    current = anime({
      targets: "path",
      strokeDashoffset: {
        value: -730,
        duration: 700,
        easing: "easeOutQuart",
      },
      strokeDasharray: {
        value: "530 1386",
        duration: 700,
        easing: "easeOutQuart",
      },
    });
  };

  //Extraer los valores del context de alertas
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  //Extraer los valores del context de Autenticación del Niño
  const authNinoContext = useContext(AuthNinoContext);
  const { mensajenino, ninoautenticado, iniciarSesionNino } = authNinoContext;

  //En caso de que la contraseña sea incorrecta o el usuario no exista
  useEffect(() => {
    //Se evalua si el usuario existe
    if(ninoautenticado) {
      props.history.push('/proyectos-nino');
    }

    //En caso de que haya un mensaje se mostrará una alerta de error
    if(mensajenino) {
      mostrarAlerta(mensajenino.msg, mensajenino.categoria);
    }

    // eslint-disable-next-line
  }, [mensajenino, ninoautenticado, props.history]);

  //State para iniciar sesión Niño
  const [usuario, guardarUsuario] = useState({
    nombreNino: '',
    passwordNino: ''
});

//Extraer valores del Usuario
const {nombreNino, passwordNino} = usuario;

const onChange = e => {
  guardarUsuario({
      ...usuario,
      [e.target.name] : e.target.value
  })
}

  //Inicio de sesión
  const onSubmit = (e) => {
    e.preventDefault();

    //Validación de campos vacios
    if(nombreNino.trim() === '' || passwordNino.trim() === ''){
      mostrarAlerta('Ups, hay que llenar todos los campos', 'alerta-error');
      return;
  }
    //Pasar al action los valores
    iniciarSesionNino({nombreNino, passwordNino});
  };
  return (
    <div className="form-usuario">
      {alerta ? (<div className={`alerta ${alerta.categoria}`}><i class="fas fa-frown-open"></i> {alerta.msg} <i class="fas fa-frown-open"></i></div> ): null}
      <img className="imagenkid" src={imagenKid} alt="Login Niño" />
      <div className="page">
        <img className="imagenkid" src={imagenKid} alt="Login Niño" />
        <div className="containerPage">
          <div className="left">
            <div className="login">Iniciar Sesión</div>
            <div className="eula">
              Al iniciar sesión, podrás introducirte a un mundo mágico lleno de
              matemáticas
            </div>
          </div>
          <div className="right">
            <svg viewBox="0 0 320 300">
              <defs>
                <linearGradient
                  id="linearGradient"
                  x1="13"
                  y1="193.49992"
                  x2="307"
                  y2="193.49992"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#008000" offset="0" id="stop876" />
                  <stop stopColor="#00FF00" offset="1" id="stop878" />
                </linearGradient>
              </defs>
              <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
            </svg>
            <form className="form" onSubmit={onSubmit}>
              <label htmlFor="nombreNino" className="labelclass">
                Usuario
              </label>
              <input
                type="text"
                id="nombreNino"
                className="inputclass"
                name="nombreNino"
                value={nombreNino}
                onChange={onChange}
                onClick={() => animacionEmail()}
              />
              <label htmlFor="passwordNino" className="labelclass">
                Contraseña:
              </label>
              <input
                type="password"
                id="passwordNino"
                className="inputclass"
                name="passwordNino"
                value={passwordNino}
                onChange={onChange}
                onClick={() => animacionPassword()}
              />
              <input
                type="submit"
                id="submit"
                value="Enviar"
                className="inputclass spacizq"
                onClick={() => animacionSubmit()}
              />
            </form>
            <Link
              to={"/"}
              className="enlace-cuenta"
              style={{ marginTop: "30rem", color: "white" }}
            >Regresar al Inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginNinoDos;
