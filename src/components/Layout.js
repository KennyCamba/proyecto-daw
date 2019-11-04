import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container } from 'reactstrap';


import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <Header/>
          <Container>
            {this.props.children}
          </Container>
        <Footer/>
      </div>
    );
  }
}

export default Layout;