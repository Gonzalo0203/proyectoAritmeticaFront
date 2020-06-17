import React, { useEffect, useState } from 'react';
import imagenLogo from '../../imagenes/aritmeticaLogin.png'
import Typed from 'react-typed';

const Barra = () => {
    //State del texto
     const [texto, guardarTexto] = useState([]);

     useEffect(() => {
        guardarTexto([
            `BIENVENIDO A ARITMÉTICA SIN FRONTERAS`,
            `EL MEJOR LUGAR PARA APRENDER MATEMÁTICAS`
         ]);
        //eslint-disable-next-line
    }, []);
        
    return (
        <header className="app-header">
            <img className="c imagenes" src={imagenLogo} alt="AritméticaSinFronteras" />
            <div className="typedcss">
                <Typed 
                    strings={texto}
                    loop={true}
                    loopCount={Infinity}
                    typeSpeed={50} 
                    fadeOut={false}
                    fadeOutClass={'typed-fade-out'}
                    fadeOutDelay={500}
                    backSpeed={50}
                />
            </div>
        </header>
    );
 }

export default Barra;

