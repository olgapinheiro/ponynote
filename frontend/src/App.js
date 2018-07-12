import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import PonyNote from "./components/PonyNote";
import NotFound from "./components/NotFound";

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={PonyNote} />
            <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
