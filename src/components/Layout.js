import React, { Component } from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';
import '../assets/css/inicio.css'

class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <Header/>
        <br/>
        <div className="cuerpo container card border-info">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Layout;