import React, { Component } from 'react';
import { Switch, Route, Router } from "react-router-dom";

import Header from './Header';
import Contactanos from './Contactanos'

class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <Router>
          <Switch>
              <Route exact path="/" component={Header} />
              <Route path="/contactanos" component={Contactanos} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Layout;