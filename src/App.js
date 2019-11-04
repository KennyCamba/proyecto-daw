import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

//import Layout from "./components/Layout";
import Contactanos from './components/Contactanos'
import Inicio from './components/Inicio';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Route exact path='/' component={Inicio} />
          <Route path='/contactanos/' component={Contactanos} />
        </Layout>
      </Router>
    </div>

  );
}

export default App;
