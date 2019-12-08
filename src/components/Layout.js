import React, { Component } from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';
import '../assets/css/inicio.css'

class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <>
        <Header/>
        {this.props.children}
        <Footer/>
      </>
    );
  }
}

export default Layout;