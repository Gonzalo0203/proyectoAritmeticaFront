import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPadre from './components/auth/LoginPadre';
import NuevaCuentaDos from './components/auth/NuevaCuentaDos';
import PreLogin from './components/auth/PreLogin';
import LoginNinoDos from './components/auth/LoginNinoDos';
import Footer from './components/layout/Footer';
import Proyectos from './components/Proyectos/Proyectos';

import InicioTutor from './components/tutor/InicioTutor';

import AlertaState from './context/alertas/alertaState';
import ActividadState from './context/actividades/actividadState';
import OpcionesState from './context/opciones/opcionesState';
import ActividadEjemploState from './context/actividadEjemplos/actividadEjemploState';
import AuthNinoState from './context/autenticacion/authNinoState';
import AuthTutorState from './context/autenticacion/authTutorState';

import tokenAuth from './components/config/tokenAuth';
import RutaPrivadaNino from './components/rutas/RutaPrivadaNino';
import RutaPrivadaTutor from './components/rutas/RutaPrivadaTutor';

import Ejemplo from './components/Proyectos/EjemplosVistas/Ejemplo';

//Revisar si el niño tiene token
const tokenNino = localStorage.getItem('tokenNino');
if(tokenNino) {
  tokenAuth(tokenNino);
}

//Revisar si el tutor tiene token
const tokenTutor = localStorage.getItem('tokenTutor');
if(tokenTutor) {
  tokenAuth(tokenTutor);
}

function App() {
    return (
      <ActividadEjemploState>
        <OpcionesState>
          <ActividadState>
            <AlertaState>
              <AuthNinoState>
              <AuthTutorState>
                  <Router>
                    <Switch>
                      <Route exact path="/" component={PreLogin} />
                      <Route exact path="/login-padre" component={LoginPadre} />
                      <Route exact path="/nueva-cuenta" component={NuevaCuentaDos} />
                      <Route exact path="/login-nino" component={LoginNinoDos} />
                      <RutaPrivadaNino exact path="/proyectos-nino" component={Proyectos} />
                      <RutaPrivadaNino exact path="/ejemplo/:id" component={Ejemplo} />
                      <RutaPrivadaTutor exact path="/inicio-tutor" component={InicioTutor} />
                    </Switch>
                    <Footer />
                  </Router>
                </AuthTutorState>
              </AuthNinoState>
            </AlertaState>
          </ActividadState>
        </OpcionesState>
      </ActividadEjemploState>
    );
}

export default App;