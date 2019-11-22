import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Layout from './components/Layout';
import Inicio from './components/Inicio';
import Contactanos from './components/Contactanos';
import Datos from './components/Datos';
import Nosotros from './components/Nosotros';
import Login from './components/Login'
import Register from './components/Register'
import Desarrolladores from './components/Desarrolladores'
import Observacion from './components/Observacion'


function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Route exact path='/' component={Inicio} />
          <Route path='/datos/' component={Datos} />
          <Route path='/contactanos/' component={Contactanos} />
          <Route path='/nosotros/' component={Nosotros} />
          <Route path='/login/' component={Login}/>
          <Route path='/registrarse/' component={Register}/>
          <Route path='/Desarrolladores/' component={Desarrolladores}/>
          <Route path='/observacion/' component={Observacion} />
        </Layout>
      </Router>
    </div>

  );
}

export default App;
