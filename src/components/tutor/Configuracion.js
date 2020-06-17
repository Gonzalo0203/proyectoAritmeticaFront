import React, { useContext, useEffect } from 'react';
import AuthTutorContext from '../../context/autenticacion/authTutorContext';
import AlertaContext from '../../context/alertas/alertaContext';

const Configuracion = () => {

    //Extraer los valores del context de alertas
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    //Extraer la información de autenticación
    const authTutorContext = useContext(AuthTutorContext);
    const { usuariotutor, ninotutor, usuarioTutorAutenticado, ninoTutorAutenticado } = authTutorContext;

    useEffect(() => {
        usuarioTutorAutenticado();
        ninoTutorAutenticado();
        // eslint-disable-next-line
    }, []);

    return ( 
        <>
            <h2 style={{color: "white"}}>INFORMACIÓN DEL PADRE O TUTOR</h2>
            <main className="mainCss mainClass">
                <form>
                <div className="campo-form">
                    <label htmlFor="nombrePadre" style={{color: "white"}}>Nombre: </label>
                    <input 
                        type="email"
                        id="nombrePadre"
                        name="nombrePadre"
                        placeholder="Email"
                        value={usuariotutor.usr}
                        // onChange={onChange}
                    />
                </div>
                <div className="campo-form">
                    <label htmlFor="emailPadre" style={{color: "white"}}>Email</label>
                    <input 
                        type="email"
                        id="emailPadre"
                        name="emailPadre"
                        placeholder="Email"
                        value={usuariotutor.email}
                        // onChange={onChange}
                    />
                </div>
                <div className="campo-form">
                    <label htmlFor="passwordPadre" style={{color: "white"}}>Contraseña Actual</label>
                    <input 
                        type="password"
                        id="passwordPadre"
                        name="passwordPadre"
                        placeholder="Para guardar los cambios coloque su contraseña"
                        //value={passwordPadre}
                        //onChange={onChangeUno}
                    />
                </div>
                <div className="campo-form">
                    <label htmlFor="nuevaPasswordPadre" style={{color: "white"}}>Nueva Contraseña</label>
                    <input 
                        type="password"
                        id="nuevaPasswordPadre"
                        name="nuevaPasswordPadre"
                        placeholder="Nueva contraseña"
                        //value={passwordPadre}
                        //onChange={onChangeUno}
                    />
                </div>
                <div className="campo-form">
                    <label htmlFor="confnuevaPasswordPadre" style={{color: "white"}}>Confirmar Contraseña</label>
                    <input 
                        type="password"
                        id="confnuevaPasswordPadre"
                        name="confnuevaPasswordPadre"
                        placeholder="Confirmar contraseña"
                        //value={passwordPadre}
                        //onChange={onChangeUno}
                    />
                </div>
                <h2 style={{marginTop: "3rem", color: "white"}}>INFORMACIÓN DEL NIÑO</h2>
                <div className="campo-form">
                    <label htmlFor="nombreNino" style={{color: "white"}}>Nombre del Niño</label>
                    <input 
                        type="text"
                        id="nombreNino"
                        name="nombreNino"
                        title="Nombre de Usuario del Niño"
                        placeholder="Nombre Usuario Niño"
                        value={ninotutor.usr}
                        // onChange={onChangeUno}
                    />
                </div>
                <div className="campo-form">
                    <label htmlFor="nuevaPasswordNino" style={{color: "white"}}>Contraseña del Niño</label>
                    <input 
                        type="password"
                        id="nuevaPasswordNino"
                        name="nuevaPasswordNino"
                        title="Contraseña de al menos 4 carácteres"
                        placeholder="Nueva contraseña, mínimo de 4 carácteres"
                        // value={passwordNino}
                        // onChange={onChangeUno}
                    />
                </div>
                <div className="campo-form">
                    <label htmlFor="confnuevaPasswordNino" style={{color: "white"}}>Confirmar Contraseña</label>
                    <input 
                        type="password"
                        id="confnuevaPasswordNino"
                        name="confnuevaPasswordNino"
                        placeholder="Confirmar Contraseña"
                        // value={confirmarNino}
                        // onChange={onChangeUno}
                    />
                </div>
                <div className="text-center">
                <div 
                    type="submit"
                    className="btn-primario buttones espacio-boton"
                    // onClick={() => cambiarAnimacionButton()}
                >GUARDAR CAMBIOS</div>
                </div>
                </form>
            </main>
        </>
     );
}
 
export default Configuracion;