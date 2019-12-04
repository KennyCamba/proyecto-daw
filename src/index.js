import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route } from "react-router-dom";
//import './App.css';
//------------------------------------------------------------------------
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss";
//------------------------------------------------------------------------

import Layout from './components/Layout';
import Inicio from './components/Inicio';
import Contactanos from './components/Contactanos';
import Datos from './components/Datos';
import Nosotros from './components/Nosotros';
import Login from './components/users/Login';
import Register from './components/users/Register';
import Profile from './components/users/Profile'
import Desarrolladores from './components/Desarrolladores';
import Observacion from './components/Observacion'
import Estacion from './components/users/Estacion'

ReactDOM.render(
    <div className="App">
      <Router>
        <Layout>
          <Route exact path='/' component={Inicio} />
          <Route path='/datos/' component={Datos} />
          <Route path='/contactanos/' component={Contactanos} />
          <Route path='/nosotros/' component={Nosotros} />
          <Route path='/login/' component={Login}/>
          <Route path='/register/' component={Register}/>
          <Route path='/estacion/' component={Estacion}/>
          <Route path='/desarrolladores/' component={Desarrolladores}/>
          <Route path='/observacion/' component={Observacion} />
          <Route path='/profile/' component={Profile}/>
        </Layout>
      </Router>
    </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
