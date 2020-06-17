import React, { Fragment } from 'react';
import Barra from '../layout/Barra';
import imagenPadre from '../../imagenes/padresImagenTres.png';
import matematicas from '../../imagenes/math.png';
import { Link } from 'react-router-dom';

const Login = () => {
    return ( 
        <Fragment>
            <div className="contenedor-app">
                <div className="seccion-principal">
                    <Barra />
                    <main>
                        <div className="contenedor btns" style={{width: "0%", float:"left"}}>
                            <img className="imagen" src={imagenPadre} alt="Imagen Padre" />
                        </div>
                        <img className="imagen imagenMath" src={matematicas} alt="Imagen Matemáticas" />
                        <div className="contenedor btns classTop" style={{width: "50%", float:"right"}}>
                            <Link to={'/login-nino'}>
                                <div className="button-container button-flip-vertical">
                                    <div className="flipper flipper-flip-vertical">
                                        <div className="button front">
                                            <i className="fa fa-child"></i>
                                        </div>
                                        <div className="button back">
                                            INGRESAR COMO ESTUDIANTE
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <br /> <br />
                            <Link to={'/login-padre'}>  
                                <div className="button-container button-flip-vertical classTop">                  
                                    <div className="flipper flipper-flip-vertical">
                                        <div className="button front">
                                            <i className="fa fa-male fa-5x"></i>
                                        </div>
                                        <div className="button back">
                                            INGRESAR COMO TUTOR
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </main>
                </div>
         </div>
         
        </Fragment>
     );
}
 
export default Login;
