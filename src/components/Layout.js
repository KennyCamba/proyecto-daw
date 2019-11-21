import React, { Component } from 'react';
import { Container } from 'reactstrap';

import Header from './shared/Header';
import Footer from './shared/Footer';

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